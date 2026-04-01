import { Component } from '@angular/core';
import { NavItems } from '../nav-items/nav-items';

@Component({
  selector: 'layout-sidebar',
  standalone: true,
  imports: [NavItems],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar { }


