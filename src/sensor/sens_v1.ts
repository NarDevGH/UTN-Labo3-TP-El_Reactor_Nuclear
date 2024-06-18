import { Alerta } from "../alerta/alerta";

export default class Sensor {
    public update(temperature: number): Alerta {
        const alerta = new Alerta();
            alerta.setTemp(temperature);
            alerta.setMensaje("Temperatura Actual");
        
        return alerta;
    }
}