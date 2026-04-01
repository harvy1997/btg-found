import { Component, inject, input } from '@angular/core';
import { Fondo } from '../../../core/interfaces/fondo/fondo';
import { CurrencyPipe } from '@angular/common';
import { AlertService } from '../../../core/services/alert/alert-service';
import { FondoStore } from '../../../core/services/fondo/fondo';
import { DialogModule } from 'primeng/dialog';
import { DialogService } from 'primeng/dynamicdialog';
import { FoundSubscribe } from '../found-subscribe/found-subscribe';

@Component({
  selector: 'app-found-detail-card',
  imports: [CurrencyPipe, DialogModule],
  templateUrl: './found-detail-card.html',
  styleUrl: './found-detail-card.scss',
  providers: [DialogService]
})
export class FoundDetailCard {
  data = input<Fondo>();
  private modalService = inject(AlertService);
  private fondoStore = inject(FondoStore);
  protected dialogService = inject(DialogService);
  openModal() {
    this.modalService.confirm(
      '¿Deseas ingresar al fondo?',
      'Ingreso al fondo',
      'Sí',
      'No'
    ).then((result) => {
      const saldo = this.fondoStore.saldo()
      if (result.isConfirmed) {
        if (saldo > 0 && saldo > (this.data()!.montoMinimo))
          this.dialogService.open(FoundSubscribe, {
            data: this.data(),
          });
        else
          this.modalService.error('No tienes saldo suficiente para ingresar al fondo', 'Error');
      }
    });
  }
}
