import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() { }

  showAlert<T extends SweetAlertOptions>(
    options: T
  ): Promise<SweetAlertResult<any>> {

    const defaultOptions: SweetAlertOptions = {
      background: 'var(--color-surface)',
      backdrop: 'rgba(0,0,0,0.2)',
      color: 'var(--color-on-surface)',
      showClass: {
        popup: 'animate__animated animate__fadeIn animate__faster',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut animate__faster',
      },
      allowOutsideClick: false,
      customClass: {
        popup: 'rounded-xl shadow-xl border border-gray-100 ',
        title: 'text-xl font-semibold !text-white',
        htmlContainer: '!text-white',
        icon: '!mb-3',
      },
    };

    return Swal.fire({ ...defaultOptions, ...options } as T);
  }

  success(message: string, title = '¡Éxito!'): Promise<SweetAlertResult> {
    return this.showAlert({
      title,
      text: message,
      icon: 'success',
      showConfirmButton: true,
      customClass: {
        popup: '!py-6 !px-8',
        icon: '!text-emerald-500 !border-emerald-100 !mb-4',
      },
    });
  }

  SuccessWithOutIcon(
    title: string = '¡Inicio de sesión exitoso!'
  ): Promise<SweetAlertResult> {
    return this.showAlert({
      title: title,
      showConfirmButton: true,
      customClass: {
        title: '!text-2xl !font-medium !text-gray-800',
        popup: '!py-8 !px-10',
      },
    });
  }

  SuccessTitleWithOutIconAndHtml(
    title: string = '¡Inicio de sesión exitoso!',
    text: string = ''
  ): Promise<SweetAlertResult> {
    return this.showAlert({
      title: title,
      html: text,
      showConfirmButton: true,
      customClass: {
        title: '!text-2xl !font-bold !text-secondary',
        htmlContainer: '!text-sm !text-secondary !overflow-y-hidden',
        popup: '!py-8 !px-10',
        confirmButton: '!bg-primary hover:!bg-secondary/80 !text-white',
      },
    });
  }

  error(message: string, title = 'Error'): Promise<SweetAlertResult> {
    return this.showAlert({
      text: message,
      confirmButtonText: 'Ok',
      customClass: {
        confirmButton: '!bg-secondary hover:!bg-secondary !text-white',
        icon: '!text-red-500 !border-red-100',
      },
    });
  }

  loginSuccess(
    title: string = '¡Inicio de sesión exitoso!'
  ): Promise<SweetAlertResult> {
    return this.showAlert({
      title: title,
      icon: 'success',
      showConfirmButton: false,
      timer: 2000,
      customClass: {
        title: '!text-2xl !font-medium !text-gray-800',
        popup: '!py-8 !px-10',
      },
    });
  }

  confirm(
    message: string,
    title = 'Confirmación',
    confirmButtonText = 'Sí',
    cancelButtonText = 'No'
  ): Promise<SweetAlertResult> {
    return this.showAlert({
      title,
      text: message,
      //icon: 'warning',
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText,
      customClass: {
        confirmButton: '!bg-secondary hover:!bg-secondary !text-white',
        cancelButton: '!bg-primary hover:!bg-primary !text-white',
        //icon: '!text-yellow-500 !border-yellow-100',
      },
    });
  }
  observation(message: string = "", title: string = "",
    confirmButtonText: string = "Aceptar", cancelButtonText: string = "Cancelar",
    placeholder: string = 'Escribe tu observación aquí...', maxlength: string = "300",
  ) {
    return this.showAlert({
      title,
      text: message,
      input: 'textarea',
      inputPlaceholder: placeholder,
      inputAttributes: { maxlength },
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText,
      inputValidator: (value: any) => {
        if (!value) {
          return 'Debes escribir una observación';
        }
        return null;
      }
    })
  }
}
