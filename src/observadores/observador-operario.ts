import { Alerta } from "../alerta/alerta";
import { Observador } from "./observador";

export default class ObservadorOperario implements Observador{
    public update(temperature: number,alert: Alerta): String {
        if (temperature > 330) {
            alert.setMensaje("Activar protocolos de enfriamiento del reactor")
        }
        return alert.getMensaje();
    }
  
}