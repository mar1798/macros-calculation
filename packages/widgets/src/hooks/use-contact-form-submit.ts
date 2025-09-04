import { useCallback } from 'react'
import { ServicesContext } from '../contexts'
import { IFormSubmitType } from '../types'

interface useContactFormSubmitReturnType {
  submit: (data: IFormSubmitType) => Promise<boolean>
}

export const useContactFormSubmit = (): useContactFormSubmitReturnType => {
  const {
    services: { forms },
  } = ServicesContext.useContainer()

  const handleSubmit = useCallback(
    async (data: IFormSubmitType): Promise<boolean> => {
      await forms.submitForm({
        ...data,
      })

      return false
    },
    []
  )

  return {
    submit: handleSubmit,
  }
}
