import { Injectable, signal, computed, effect } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario/usuario';

const AUTH_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class AuthStore {

  // ---------------- STATE ----------------
  private _user = signal<Usuario | null>(null);

  user = this._user.asReadonly();

  isAuthenticated = computed(() => !!this._user());

  userName = computed(() => this._user()?.nombre ?? '');

  constructor(private router: Router) {
    this.hidratar();

    // persistencia automática
    effect(() => {
      const user = this._user();

      if (user) {
        localStorage.setItem(AUTH_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(AUTH_KEY);
      }
    });
  }

  // ---------------- INIT ----------------
  private hidratar() {
    const data = localStorage.getItem(AUTH_KEY);

    if (!data) return;

    try {
      const parsed: Usuario = JSON.parse(data);
      this._user.set(parsed);
    } catch (e) {
      console.error('Error cargando auth', e);
    }
  }

  // ---------------- ACTIONS ----------------

  login(nombre: string) {
    this._user.set({ nombre });

    // 🔥 navegación automática
    this.router.navigate(['/home']);
  }

  logout() {
    this._user.set(null);

    // 🔥 limpiar navegación
    this.router.navigate(['/login']);
  }

  // ---------------- HELPERS ----------------

  checkAuth() {
    if (!this.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}