import { Alerta } from "../alerta/alerta";
import { IObservadorEstadoReactor } from "./IObservadorEstadoReactor";


export default class ObservadorEstadoReactor implements IObservadorEstadoReactor{
    private alertasRecibidas: Alerta[];

    constructor(){
        this.alertasRecibidas = [];
    }

    public recibirAlerta(alerta: Alerta): void {
        this.alertasRecibidas.push(alerta)
    }

    public getAlertas(): Alerta[]{
        return this.alertasRecibidas;
    }
}