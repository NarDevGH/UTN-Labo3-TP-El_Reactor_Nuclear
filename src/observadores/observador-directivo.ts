import { Alerta } from "../alerta/alerta";
import { Observador } from "./observador";

export default class ObservadorDirectivo implements Observador{
    public update(temperature: number, alert:Alerta): String {
        if (temperature === 0) {
            alert.setMensaje("El reactor está apagado")
        }
        return alert.getMensaje();
    }
}