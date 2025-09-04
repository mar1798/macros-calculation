import type { IFormSubmitFeed, IResponseMessage, IServiceForms } from '../../../types'

export class FormsService implements IServiceForms {
  public async submitForm(data: IFormSubmitFeed): Promise<IResponseMessage> {
    alert(`Form submitted: ${JSON.stringify(data)}`)
    return Promise.resolve({ success: true })
  }
}
