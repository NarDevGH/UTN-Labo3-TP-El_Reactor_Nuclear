import { Alerta } from "../alerta/alerta";
import { Observador } from "./observador";

export default class ObservadorTemperatura implements Observador{
    public update(temperature: number): Alerta {
        const alerta = new Alerta();
            alerta.setTemp(temperature);
            alerta.setMensaje("Temperatura Actual");
        
        return alerta;
    }
}