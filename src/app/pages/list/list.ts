import { Component, inject } from '@angular/core';
import { MovementCard } from '../../shared/components/movement-card/movement-card';
import { FondoStore } from '../../core/services/fondo/fondo';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [MovementCard, CurrencyPipe],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  protected fondoStore = inject(FondoStore);
}
