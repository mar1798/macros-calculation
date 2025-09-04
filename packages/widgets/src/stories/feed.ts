import faker from './faker'
import {
  IBaseTextInputProps,
  IControlProps,
  IImage,
  ILink,
  ILinkedLabel,
  IMainFormProps,
} from '../types'

export const repeatFeed = <T>(val: T, times: number): T[] => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return new Array(times).fill(val)
}

export const feedControl = (label = 'Label', helperText = 'Helper text'): IControlProps => ({
  label: label,
  helperText: helperText,
  error: false,
})

export const feedImage = (w: number, h: number): IImage => ({
  src: faker.image.url({ width: w, height: h }),
  alt: 'Avataar',
  title: 'Dicebear Avatar',
  width: w,
  height: h,
})

export const feedLink = (src = 'https://google.com'): ILink => ({
  href: src,
  target: '_blank',
})

export const feedLinkedLabel = (
  label = 'Link label',
  linkSrc = 'https://google.com'
): ILinkedLabel => ({
  label,
  link: feedLink(linkSrc),
})

export const feedBaseInputText = (placeholder = 'Placeholder'): IBaseTextInputProps => ({
  placeholder: placeholder,
  error: false,
  disabled: false,
  type: 'text',
  size: 'large',
  required: false,
})

export const feedMainForm = (): IMainFormProps => ({
  fields: [
    {
      name: 'name',
      label: 'Name',
      placeholder: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Name',
      placeholder: 'Name',
      type: 'email',
      required: true,
    },
    {
      name: 'company',
      label: 'Name',
      placeholder: 'Name',
      type: 'textarea',
      required: false,
    },
  ],
  buttonLabel: 'Send Now',
  formName: 'home-form',
})
