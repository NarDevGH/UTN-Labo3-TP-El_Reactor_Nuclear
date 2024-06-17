import { Alerta } from "../alerta/alerta";

export interface Observador {
    update(temperature: number): Alerta;
}