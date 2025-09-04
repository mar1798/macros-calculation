import clsx from 'clsx'
import { type FC, FormEvent, useEffect, useState } from 'react'
import type { IBasicStyling, IMainFormProps } from '../../types'
import * as styles from './MainForm.css'
import { BaseInput, Button, Control, Textarea } from '../../atoms'
import { useContactFormSubmit } from '../../hooks/use-contact-form-submit'

export const MainForm: FC<IMainFormProps & IBasicStyling> = ({
  className,
  fields,
  buttonLabel,
  formName,
}) => {
  const { submit } = useContactFormSubmit()
  const [pending, setPending] = useState(false)

  const [formData, setFormData] = useState(() =>
    fields.reduce(
      (acc, el) => {
        acc[el.name] = ''
        return acc
      },
      {} as Record<string, string>
    )
  )

  const reset = () => {
    setFormData(() =>
      fields.reduce(
        (acc, el) => {
          acc[el.name] = ''
          return acc
        },
        {} as Record<string, string>
      )
    )
  }

  const handleChange = (value: string, name: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (pending) {
      return
    }
    setPending(true)

    try {
      await submit({
        data: formData,
        name: formName,
      })

      reset()
    } finally {
      setPending(false)
    }
  }

  useEffect(() => {
    reset()
  }, [fields])

  return (
    <form className={clsx(styles.container, className)} onSubmit={handleSubmit}>
      {fields.map((field, i) => {
        return (
          <Control key={i} className={styles.field} label={field.label}>
            {field.type === 'textarea' ? (
              <Textarea
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={val => handleChange(val, field.name)}
                required={field.required}
                type={field.type}
              />
            ) : (
              <BaseInput
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={val => handleChange(val, field.name)}
                required={field.required}
                type={field.type}
                size="small"
              />
            )}
          </Control>
        )
      })}
      <Button
        disabled={pending}
        className={styles.button}
        variant="primary"
        size="large"
        type="submit"
      >
        {buttonLabel}
      </Button>
    </form>
  )
}
