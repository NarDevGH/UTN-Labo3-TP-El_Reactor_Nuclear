import Reactor from "../reactor/reactor";
import { ResultadoEnergia } from "../types/constants";
import { Estado } from "./estado";
import EstadoCritico from "./estado-critico";

export default class EstadoCriticidad extends Estado{
    manejaCambioTemperatura(reactor: Reactor) {
        let NuevaTemp: number = 0;
        if (reactor.getTemperatura() > 400) {
            reactor.setEstado(new EstadoCritico()); 
        } else {
            reactor.getBarrasDeControl().forEach(valor => {
                while (NuevaTemp <= reactor.getTemperatura() && reactor.getBarrasDeControl.length > 0) {
                NuevaTemp = (valor.tiempoVida/3600)*100;
                }
            });
            reactor.setTemperatura(NuevaTemp)
        }
    }
    
    public generarEnergia(temperatura: number): ResultadoEnergia {
        const resultado = this.calcularEnergia (temperatura);
        resultado.termal = resultado.termal*0.2;
        resultado.neta = resultado.neta*0.2;
        return resultado;
    }

    public notificar(reactor: Reactor) {
        for (const observador of reactor.getObservadorOperario()) {
            observador.update(reactor.getTemperatura());
        }
    }

}

