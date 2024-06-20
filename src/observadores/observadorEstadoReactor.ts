import { Alerta } from "../alerta/alerta";
import { IObservadorEstadoReactor } from "./IObservadorEstadoReactor";


export default class ObservadorEstadoReactor implements IObservadorEstadoReactor{
    private alertasRecividas: Alerta[];

    constructor(){
        this.alertasRecividas = [];
    }

    public recibirAlerta(alerta: Alerta): void {
        this.alertasRecividas.push(alerta)
    }

    public getAlertas(): Alerta[]{
        return this.alertasRecividas;
    }
}