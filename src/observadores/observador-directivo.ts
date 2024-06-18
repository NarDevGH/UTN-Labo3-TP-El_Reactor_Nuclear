import { Alerta } from "../alerta/alerta";
import { Observador } from "./observador";

export default class ObservadorDirectivo implements Observador{
    public update(temperature: number): Alerta {
        const alerta = new Alerta();
        if (temperature === 0) {
            alerta.setTemp(temperature)
            alerta.setMensaje("El reactor está apagado");
        }
        return alerta;
    }
}