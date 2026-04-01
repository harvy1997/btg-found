import { Component, input } from '@angular/core';

import { CurrencyPipe, DatePipe } from '@angular/common';
import { Transaccion } from '../../../core/interfaces/transaccion/transaccion';

@Component({
  selector: 'app-movement-card',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './movement-card.html',
  styleUrl: './movement-card.scss',
})
export class MovementCard {
  data = input<Transaccion>();
}
