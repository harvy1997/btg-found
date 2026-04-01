import { Component, inject, input } from '@angular/core';
import { Fondo } from '../../../core/interfaces/fondo/fondo';
import { CurrencyPipe } from '@angular/common';
import { AlertService } from '../../../core/services/alert/alert-service';
import { FondoStore } from '../../../core/services/fondo/fondo';

@Component({
  selector: 'app-found-card',
  imports: [CurrencyPipe],
  templateUrl: './found-card.html',
  styleUrl: './found-card.scss',
})
export class FoundCard {
  data = input<Fondo>();
  private modalService = inject(AlertService);
  private fondoStore = inject(FondoStore);

  openModal() {
    this.modalService.confirm(
      '¿Deseas cancelar la suscripción?',
      'Cancelar suscripción',
      'Sí',
      'No'
    ).then((result) => {
      if (result.isConfirmed) {
        this.fondoStore.cancelar(this.data()!);
      }
    });
  }
}
