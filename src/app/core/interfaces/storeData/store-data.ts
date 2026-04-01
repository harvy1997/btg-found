import { Fondo } from "../fondo/fondo";
import { Transaccion } from "../transaccion/transaccion";

export interface StoreData {
    saldo: number;
    fondosActivos: Fondo[];
    transacciones: Transaccion[];
}
