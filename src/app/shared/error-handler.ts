import { ErrorHandler, Injectable, NgZone } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http'
import { MessageService } from 'primeng/api'

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {
  private errors

  constructor(private messageService: MessageService, private zone: NgZone) {
    super()

    this.errors = {
      400: 'Bad request. Please, verify the request data',
      404: 'Resource not found. Please, try again',
      500: 'Internal server error. Sorry, there is something wrong at the server'
    }
  }

  handleError(errorResponse: HttpErrorResponse | any) {
    if (errorResponse instanceof HttpErrorResponse) {
      const error = this.errors[errorResponse.status]

      if (error) {
        this.zone.run(() => {
          this.messageService.add({severity: 'error', summary: 'Something went wrong', detail: error})
        })
      }
    }
    super.handleError(errorResponse)
  }
}
