import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthStore } from '../../../core/services/auth/auth-store';
import { FondoStore } from '../../../core/services/fondo/fondo';

@Component({
  selector: 'app-nav-items',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-items.html',
})
export class NavItems {
  @Input() variant: 'sidebar' | 'bottom-bar' = 'sidebar';

  menuItems = [
    { label: 'Inicio', icon: 'dashboard', route: '/home', exact: true },
    { label: 'Transacciones', icon: 'history', route: '/home/list', exact: false },
    // { label: 'Portafolio', icon: 'account_balance_wallet', route: null, exact: false },
  ];

  private authStore = inject(AuthStore);

  private fondoStore = inject(FondoStore);

  logout() {
    this.fondoStore.reset();
    this.authStore.logout();
  }
}
