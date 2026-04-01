import { Component } from '@angular/core';
import { FoundCard } from '../../shared/components/found-card/found-card';
import { CarouselModule } from 'primeng/carousel';
import { FoundDetailCard } from '../../shared/components/found-detail-card/found-detail-card';

@Component({
  selector: 'app-home',
  imports: [FoundCard, CarouselModule, FoundDetailCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  cards = [1, 2, 3, 4];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 2,
      numScroll: 1
    }
  ];
}

