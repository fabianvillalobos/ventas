import { Concepto } from "./Concepto";

export interface Venta{
    idCliente: number;
    conceptos: Concepto[];
}