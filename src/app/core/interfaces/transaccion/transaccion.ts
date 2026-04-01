export interface Transaccion {
    id: number;
    fondoId: number;
    nombreFondo: string;
    tipo: 'APERTURA' | 'CANCELACION';
    monto: number;
    fecha: Date;
}