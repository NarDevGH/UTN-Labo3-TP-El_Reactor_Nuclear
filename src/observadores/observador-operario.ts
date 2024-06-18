import { Alerta } from "../alerta/alerta";
import { Observador } from "./observador";

export default class ObservadorOperario implements Observador{
    public update(temperature: number): Alerta {
        const alerta = new Alerta();
        if (temperature > 330) {
            alerta.setTemp(temperature);
            alerta.setMensaje("Activar protocolos de enfriamiento del reactor");
        }
        return alerta;
    }
  
}