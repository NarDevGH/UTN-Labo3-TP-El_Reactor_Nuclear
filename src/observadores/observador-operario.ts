import { Alerta } from "../alerta/alerta";
import { Observador } from "./observador";

export default class ObservadorOperario implements Observador{

    private _ultimaAlerta: Alerta;

    public update(alert: Alerta){

        this._ultimaAlerta = alert;
    }
  
}