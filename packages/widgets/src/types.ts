import type { ISizes } from './utils'
import type React from 'react'
import type { ReactNode } from 'react'

export interface IWrapperComponent {
  children?: React.ReactNode
}

export interface ILink {
  href: string
  target?: React.HTMLAttributeAnchorTarget
  ['aria-label']?: string
  legacy?: boolean
}
export interface ILinkedLabel {
  label: string
  link: ILink
}

export interface IBasicStyling {
  className?: string
}

export interface IImage {
  src: string | StaticImageData
  alt: string
  title?: string
  width: number
  height: number
}

export interface StaticImageData {
  src: string
  height: number
  width: number
  blurDataURL?: string
  blurWidth?: number
  blurHeight?: number
}

export interface IImageComponentProps {
  image: IImage
  sizes: ISizes
  priority?: boolean
}

interface IButtonButton {
  type: 'button'
  onClick: () => void
}

interface IButtonSubmit {
  type: 'submit'
  onClick?: () => void
}

interface IButtonReset {
  type: 'reset'
  onClick?: () => void
}

export type IButtonUnion = IButtonButton | IButtonSubmit | IButtonReset | ILink

export interface IButtonComponentProps {
  variant: 'primary' | 'secondary' | 'plain'
  size: 'large' | 'medium' | 'small'
  children: ReactNode
  disabled?: boolean
  startIcon?: React.FC<IBasicStyling>
  endIcon?: React.FC<IBasicStyling>
}

export interface IInputModel<T> {
  value: T
  onChange: (value: T) => void
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export interface IFormInput {
  placeholder: string
  name?: string
  disabled?: boolean
  error?: boolean
  required: boolean
  size: 'small' | 'large'
  startIcon?: React.FC<IBasicStyling>
}

export interface IBaseEmailInputProps extends IFormInput {
  type: 'email'
  endIcon?: React.FC<IBasicStyling>
}

export interface IBaseNumberInputProps extends IFormInput {
  type: 'number'
  endIcon?: React.FC<IBasicStyling>
}

export interface IBaseTextInputProps extends IFormInput {
  type: 'text'
  endIcon?: React.FC<IBasicStyling>
}

export interface ITextareaProps extends Omit<IFormInput, 'size'> {
  type: 'textarea'
}

export interface IControlProps {
  label?: string
  helperText?: string
  error?: boolean
  children?: ReactNode
  required?: boolean
  helperTextClassName?: string
}

export interface IResponseMessage {
  success: boolean
}

export interface IServiceForms {
  submitForm: (data: IFormSubmitFeed) => Promise<IResponseMessage>
}

export type IFormSubmitType = Pick<IFormSubmitFeed, 'name' | 'data'>

export type IFormSubmitFeed = {
  data: Record<string, string>
  name: string
}

export interface IRouterService {
  push: (pathname: string, options?: Record<string, unknown>) => void
  back: () => void
  registerListener: (
    event: 'routeChanged' | 'routeChangeBegin',
    fn: (e: IRouterEvent) => void
  ) => () => void
}

export interface IRouterEvent {
  pathName: string
  url: string
}

export interface IFormElementType {
  label: string
  placeholder: string
  type: 'text' | 'textarea' | 'email' | 'number'
  name: string
  required: boolean
}

export interface IMainFormProps {
  fields: IFormElementType[]
  buttonLabel: string
  formName: string
}

export interface IControlProps {
  label?: string
  helperText?: string
  error?: boolean
  children?: ReactNode
  required?: boolean
  helperTextClassName?: string
}

export interface IHomeFormProps {
  title: string
  subtitle: string
  form: IMainFormProps
}
