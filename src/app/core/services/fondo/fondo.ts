import { computed, effect, Injectable, signal } from '@angular/core';
import { Fondo } from '../../interfaces/fondo/fondo';
import { Transaccion } from '../../interfaces/transaccion/transaccion';
import { StoreData } from '../../interfaces/storeData/store-data';

const STORAGE_KEY = 'btg-store';

@Injectable({
  providedIn: 'root',
})
export class FondoStore {
  // estado privado
  private _saldo = signal(500000);
  private _fondosActivos = signal<Fondo[]>([]);
  private _transacciones = signal<Transaccion[]>([]);
  private lastSerialized = signal("");
  // "DB" mock
  fondos: Fondo[] = [
    { id: 1, nombre: 'FPV BTG PACTUAL RECAUDADORA', montoMinimo: 75000, categoria: 'FPV', monto: 0 },
    { id: 2, nombre: 'FPV BTG PACTUAL ECOPETROL', montoMinimo: 125000, categoria: 'FPV', monto: 0 },
    { id: 3, nombre: 'DEUDA PRIVADA', montoMinimo: 50000, categoria: 'FIC', monto: 0 },
    { id: 4, nombre: 'FDO ACCIONES', montoMinimo: 250000, categoria: 'FIC', monto: 0 },
    { id: 5, nombre: 'FPV BTG PACTUAL DINAMICA', montoMinimo: 100000, categoria: 'FPV', monto: 0 }
  ];

  // estado público readonly
  saldo = this._saldo.asReadonly();
  fondosActivos = this._fondosActivos.asReadonly();
  transacciones = this._transacciones.asReadonly();

  // total invertido
  totalInvertido = computed(() =>
    this._fondosActivos().reduce((acc, f) => acc + f.monto, 0)
  );

  // fondos disponibles
  fondosDisponibles = computed(() =>
    this.fondos.filter(f =>
      !this._fondosActivos().some(a => a.id === f.id)
    )
  );

  // ultimas transacciones
  ultimasTransacciones = computed(() =>
    this._transacciones().slice(0, 5)
  );

  // ---------------- INIT ----------------
  constructor() {
    this.hidratar();

    // auto-guardar cuando cambie algo
    effect(() => {
      const data: StoreData = {
        saldo: this._saldo(),
        fondosActivos: this._fondosActivos(),
        transacciones: this._transacciones()
      };

      const serialized = JSON.stringify(data);
      if (serialized !== this.lastSerialized()) {
        this.lastSerialized.set(serialized);
        localStorage.setItem(STORAGE_KEY, serialized);
      }
    });

    window.addEventListener('storage', (event) => {
      if (event.key === STORAGE_KEY && event.newValue) {
        this.lastSerialized.set(event.newValue); // 🔥 evita loop
        this.sincronizarDesdeStorage(event.newValue);
      }
    });
  }

  // ---------------- PERSISTENCIA ----------------
  private hidratar() {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) return;

    try {
      const parsed: StoreData = JSON.parse(data);

      this._saldo.set(parsed.saldo ?? 500000);
      this._fondosActivos.set(parsed.fondosActivos ?? []);
      this._transacciones.set(
        (parsed.transacciones ?? []).map(t => ({
          ...t,
          fecha: new Date(t.fecha) // 🔥 importante
        }))
      );

    } catch (e) {
      console.error('Error cargando storage', e);
    }
  }

  private sincronizarDesdeStorage(serialized: string) {
    try {
      const parsed: StoreData = JSON.parse(serialized);

      this._saldo.set(parsed.saldo ?? 500000);
      this._fondosActivos.set(parsed.fondosActivos ?? []);
      this._transacciones.set(
        (parsed.transacciones ?? []).map(t => ({
          ...t,
          fecha: new Date(t.fecha)
        }))
      );
    } catch (e) {
      console.error('Error sincronizando desde storage', e);
    }
  }

  private generarTransaccion(fondo: Fondo, tipo: 'APERTURA' | 'CANCELACION'): Transaccion {
    return {
      id: Date.now(), // suficiente para prueba
      fondoId: fondo.id,
      nombreFondo: fondo.nombre,
      tipo,
      monto: fondo.montoMinimo,
      fecha: new Date()
    };
  }

  // acciones
  suscribirse(fondo: Fondo, saldo: number) {
    if (fondo.montoMinimo > saldo) {
      return { ok: false, mensaje: 'El monto minimo es mayor al monto de entrada' };
    }
    if (this._saldo() < saldo) {
      return { ok: false, mensaje: 'Saldo insuficiente' };
    }

    this._saldo.update(s => s - saldo);
    fondo.monto = saldo;
    this._fondosActivos.update(f => [...f, fondo]);
    // agregar transacción
    this._transacciones.update(t => [
      this.generarTransaccion(fondo, 'APERTURA'),
      ...t
    ]);
    return { ok: true };
  }

  cancelar(fondo: Fondo) {
    this._saldo.update(s => s + fondo.monto);
    this._fondosActivos.update(f => f.filter(x => x.id !== fondo.id));
    // agregar transacción
    this._transacciones.update(t => [
      this.generarTransaccion(fondo, 'CANCELACION'),
      ...t
    ]);
  }
  reset() {
    localStorage.removeItem(STORAGE_KEY);
    this._saldo.set(500000);
    this._fondosActivos.set([]);
    this._transacciones.set([]);
  }

}
