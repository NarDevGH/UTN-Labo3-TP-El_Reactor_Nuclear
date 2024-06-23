import { Alerta } from "../alerta/alerta";
import Reactor from "../reactor/reactor";
import { ResultadoEnergia } from "../types/resultado_energia";
import { Estado } from "./estado";
import EstadoNormal from "./estado-normal";

export default class EstadoCritico extends Estado {
    public manejaCambioTemperatura(reactor: Reactor): number {
        reactor.setContadorBarras(0)
        let NuevaTemp: number = 0;
        reactor.getBarrasDeControl().forEach(valor => {
            while(valor.porcentajeReduccionEnergia() > 0){
                // Reducir temperatura del reactor segun el porcentaje de enfriamento de la barra
                NuevaTemp = reactor.getTemperatura() - (reactor.getTemperatura() * valor.porcentajeReduccionEnergia());
                if (NuevaTemp < 330) {
                    //Si la temperatura paso a al rango normal, dejar de usar las barras para reducir la temperatura
                    break;
                }
            }
            //Por cada barra usada, aumentar el contador
            reactor.setContadorBarras(reactor.getContadorBarras() + 1)
        });
        reactor.setTemperatura(NuevaTemp)
        reactor.setContadorEstNormal(reactor.getContadorEstNormal() + 1)
        reactor.setEstado(new EstadoNormal()); 
        this.notificarDirectivos(reactor);
        return reactor.getContadorBarras()
    }

    public eficienciaEneregitaEnEstado(energia: ResultadoEnergia): ResultadoEnergia
    {
        energia.termal = energia.termal * 0;
        energia.neta = energia.neta * 0;
        return  energia;
    }

    public notificarDirectivos(reactor: Reactor): void{
        for (const observador of reactor.getObservadorDirectivo()) {
            let alerta = new Alerta();
            alerta.setMensaje("El reactor se encuentra en estado critico, procederá a apagarse")
            alerta.setTemp(reactor.getTemperatura())
            observador.recibirAlerta(alerta);
        }

    }
}