import { Component, inject } from '@angular/core';
import { NavItems } from '../nav-items/nav-items';
import { AuthStore } from '../../../core/services/auth/auth-store';
import { FondoStore } from '../../../core/services/fondo/fondo';

@Component({
  selector: 'layout-sidebar',
  standalone: true,
  imports: [NavItems],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  private authStore = inject(AuthStore);
  protected userName = this.authStore.userName;
  private fondoStore = inject(FondoStore);

  logout() {
    this.fondoStore.reset();
    this.authStore.logout();
  }
}


