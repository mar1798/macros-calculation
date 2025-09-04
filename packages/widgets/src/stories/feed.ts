import faker from './faker'
import {
  IBaseTextInputProps,
  IControlProps,
  IHomeFormProps,
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
      name: 'product',
      label: 'Product',
      placeholder: 'Product',
      type: 'text',
      required: true,
    },
    {
      name: 'carbs',
      label: 'Carbs',
      placeholder: 'Carbs',
      type: 'number',
      required: true,
    },
    {
      name: 'protein',
      label: 'Protein',
      placeholder: 'Protein',
      type: 'number',
      required: true,
    },
    {
      name: 'fat',
      label: 'Fat',
      placeholder: 'Fat',
      type: 'number',
      required: false,
    },
    {
      name: 'weight',
      label: 'Weight',
      placeholder: 'Weight',
      type: 'number',
      required: false,
    },
  ],
  buttonLabel: 'Send',
  formName: 'main-form',
})

export const feedHomeForm = (): IHomeFormProps => ({
  title: `Macro Calculator`,
  subtitle: 'Calculate the nutritional content of your meals',
  form: feedMainForm(),
})
