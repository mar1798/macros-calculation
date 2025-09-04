import type { IFormSubmitFeed, IResponseMessage, IServiceForms } from 'widgets/types'
import { Api } from '@/lib/api'
import { publicConfig } from '@/сonfig'

export class FormsService implements IServiceForms {
  private client = new Api({
    baseUrl: publicConfig('baseUrl'),
  })

  public async submitForm(data: IFormSubmitFeed): Promise<IResponseMessage> {
    const result = await this.client.sendForm({
      action: publicConfig('baseUrl') + publicConfig('formEndpoint'),
      ...data,
    })
    return {
      success: result,
    }
  }
}
