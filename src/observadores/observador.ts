import { Alerta } from "../alerta/alerta";

export interface Observador {
    update(alert: Alerta): void;
}