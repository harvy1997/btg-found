import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-items',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-items.html',
})
export class NavItems {
  @Input() variant: 'sidebar' | 'bottom-bar' = 'sidebar';

  menuItems = [
    { label: 'Inicio', icon: 'dashboard', route: '/', exact: true },
    { label: 'Transacciones', icon: 'history', route: '/list', exact: false },
    { label: 'Portafolio', icon: 'account_balance_wallet', route: null, exact: false },
  ];
}
