import parse, {
  type DOMNode,
  domToReact,
  Element,
  type HTMLReactParserOptions,
} from 'html-react-parser'
import { AppImage, AppLink } from '../atoms'

interface IElementProps {
  node: Element
  parser: (children: DOMNode[]) => React.ReactNode
  sizes?: number
}

type IContentMap = Record<string, React.FC<IElementProps>>

interface IOpts {
  content?: IContentMap
  allowScript?: boolean
  sizes?: number
}

/**
 * Parse html string to react nodes
 * @param input
 * @param opts
 */
export function contentParse(input: string, opts: IOpts = {}): React.ReactNode {
  const mergedOpts: Required<IOpts> = {
    allowScript: false,
    sizes: 128,
    content: {
      ...contentLinkProcessor,
      ...contentImageProcessor,
      ...(opts.content ?? {}),
    },
    ...opts,
  }

  const parseOptions: HTMLReactParserOptions = {
    replace: domNode => {
      if (!(domNode instanceof Element)) {
        return domNode
      }

      const allowed = ['tag']
      if (opts.allowScript) {
        allowed.push('script')
      }

      if (!allowed.includes(domNode.type)) {
        return <></>
      }

      if (mergedOpts.content && domNode.name in mergedOpts.content) {
        const Component = mergedOpts.content[domNode.name]
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        return (
          <Component
            sizes={mergedOpts.sizes}
            node={domNode}
            parser={ch => domToReact(ch, parseOptions)}
          />
        )
      }

      return domNode
    },
  }

  return parse(input, parseOptions)
}

export const contentLinkProcessor: IContentMap = {
  a: ({ node, parser }) => {
    return (
      <AppLink className={node.attribs.class} href={node.attribs.href} target={node.attribs.target}>
        {parser(node.children as DOMNode[])}
      </AppLink>
    )
  },
}

export const contentImageProcessor: IContentMap = {
  img: ({ node, sizes }) => {
    const isWidthOrHeightNaN =
      Number.isNaN(parseInt(node.attribs.width, 10)) ||
      Number.isNaN(parseInt(node.attribs.height, 10))

    return (
      <AppImage
        className={node.attribs.class}
        image={{
          src: node.attribs.src,
          width: isWidthOrHeightNaN ? 16 : parseInt(node.attribs.width, 10),
          height: isWidthOrHeightNaN ? 9 : parseInt(node.attribs.height, 10),
          alt: node.attribs.alt ?? 'alt is required',
        }}
        sizes={{ fb: sizes ?? '100vw' }}
      />
    )
  },
}
