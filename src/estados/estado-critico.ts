import Reactor from "../reactor/reactor";
import { ResultadoEnergia } from "../types/constants";
import { Estado } from "./estado";

export default class EstadoCritico extends Estado{
    public manejaCambioTemperatura(reactor: Reactor) {
        let NuevaTemp: number = 0;
        reactor.getBarrasDeControl().forEach(valor => {
            while (NuevaTemp > 330 && reactor.getBarrasDeControl.length > 0) {
            NuevaTemp = (valor.tiempoVida/3600)*100;
            }
        });
        reactor.setTemperatura(NuevaTemp)
    }

    generarEnergia(temperatura: number): ResultadoEnergia {
        const resultado = this.calcularEnergia (temperatura);
        resultado.termal = resultado.termal*0;
        resultado.neta = resultado.neta*0;
        return resultado;
    }

    public notificar(reactor: Reactor) {
        for (const observador of reactor.getObservadorDirectivo()) {
            observador.update(reactor.getTemperatura());
        }
    }
}