import { Alerta } from "../alerta/alerta";



export interface IObservadorEstadoReactor {
    recibirAlerta(alerta: Alerta): void;
    getAlertas(): Alerta[];
}
