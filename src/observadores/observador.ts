import { Alerta } from "../alerta/alerta";

export interface Observador {
    update(temperature: number, alert: Alerta): String;
}