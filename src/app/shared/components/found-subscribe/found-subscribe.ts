import { Component, inject, signal } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Fondo } from '../../../core/interfaces/fondo/fondo';
import { CurrencyPipe, NgClass } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FondoStore } from '../../../core/services/fondo/fondo';
import { AlertService } from '../../../core/services/alert/alert-service';

@Component({
  selector: 'app-found-subscribe',
  standalone: true,
  imports: [CurrencyPipe, ReactiveFormsModule, FormsModule, NgClass],
  templateUrl: './found-subscribe.html',
  styleUrl: './found-subscribe.scss',
})
export class FoundSubscribe {
  protected data = signal<Fondo | null>(null);
  public subscribeForm: FormGroup;

  private fb = inject(FormBuilder);
  private fondoStore = inject(FondoStore);
  private alertService = inject(AlertService);
  private ref = inject(DynamicDialogRef);
  private config = inject(DynamicDialogConfig);

  constructor() {
    this.data.set(this.config.data);

    // Initialize form with the fund's minimum amount by default
    this.subscribeForm = this.fb.group({
      monto: [this.data()?.montoMinimo || 0, [
        Validators.required,
        Validators.min(this.data()?.montoMinimo || 0)
      ]],
      notificacion: ['email', [Validators.required]]
    });
  }

  setNotification(type: 'email' | 'sms') {
    this.subscribeForm.patchValue({ notificacion: type });
  }

  get notificationType() {
    return this.subscribeForm.get('notificacion')?.value;
  }

  close() {
    this.ref.close();
  }

  async onSubmit() {
    if (this.subscribeForm.invalid) {
      this.subscribeForm.markAllAsTouched();
      return;
    }

    const { monto } = this.subscribeForm.value;
    const result = this.fondoStore.suscribirse(this.data()!, monto);

    if (result.ok) {
      await this.alertService.success(
        `Te has suscrito exitosamente al fondo ${this.data()?.nombre}.`,
        'Suscripción Exitosa'
      );
      this.ref.close(true);
    } else {
      this.alertService.error(result.mensaje || 'Ocurrió un error al procesar la suscripción.');
    }
  }
}

