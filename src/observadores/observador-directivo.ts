import { Observador } from "./observador";

export default class ObservadorDirectivo implements Observador{
    public update(temperature: number) {
        if (temperature === 0) {
            console.log('Alerta al jefe: El reactor se ha apagado.');
        }
    }
}