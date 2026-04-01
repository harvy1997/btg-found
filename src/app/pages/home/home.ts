import { Component, inject } from '@angular/core';
import { FoundCard } from '../../shared/components/found-card/found-card';
import { CarouselModule } from 'primeng/carousel';
import { FoundDetailCard } from '../../shared/components/found-detail-card/found-detail-card';
import { FondoStore } from '../../core/services/fondo/fondo';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FoundCard, FoundDetailCard, CurrencyPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  providers: [FondoStore]
})
export class Home {
  private fondoStore = inject(FondoStore);
  saldo = this.fondoStore.saldo;
  totalInvertido = this.fondoStore.totalInvertido;
  fondosActivos = this.fondoStore.fondosActivos;
  fondosDisponibles = this.fondoStore.fondosDisponibles;
  ultimasTransacciones = this.fondoStore.ultimasTransacciones;


}

