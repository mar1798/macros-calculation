import type { IBasicStyling, IImageComponentProps, ILink } from 'widgets/types'
import NextImg from 'next/image'
import NextLink from 'next/link'
import type { PropsWithChildren } from 'react'
import { extractSizes } from 'widgets/utils'

export const Image: React.FC<IBasicStyling & IImageComponentProps> = ({
  className,
  sizes,
  image,
  priority,
}) => (
  <NextImg
    className={className}
    width={image.width}
    decoding="async"
    height={image.height}
    priority={priority}
    alt={image.alt}
    src={image.src}
    sizes={extractSizes(sizes)}
    title={image.title}
    quality={100}
  />
)

export const Link: React.FC<PropsWithChildren & ILink & IBasicStyling> = ({
  children,
  className,
  legacy,
  ...props
}) => {
  if (legacy) {
    return (
      <a className={className} {...props}>
        {children}
      </a>
    )
  }

  return (
    <NextLink {...props} className={className}>
      {children}
    </NextLink>
  )
}
