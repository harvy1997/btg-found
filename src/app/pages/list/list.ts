import { Component } from '@angular/core';
import { MovementCard } from '../../shared/components/movement-card/movement-card';

@Component({
  selector: 'app-list',
  imports: [MovementCard],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List { }
