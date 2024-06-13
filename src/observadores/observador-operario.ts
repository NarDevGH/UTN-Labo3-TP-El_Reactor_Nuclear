import { Observador } from "./observador";

export default class ObservadorOperario implements Observador{
    public update(temperature: number) {
        if (temperature > 330) {
            console.log('Alerta activar metodo enfriamiento');
        }
    }
}