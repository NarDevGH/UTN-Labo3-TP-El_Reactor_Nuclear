import { Alerta } from "../alerta/alerta";
import Reactor from "../reactor/reactor";
import { ResultadoEnergia } from "../types/resultado_energia";
import { Estado } from "./estado";
import EstadoCritico from "./estado-critico";
import EstadoNormal from "./estado-normal";

export default class EstadoCriticidad extends Estado {

    manejaCambioTemperatura(reactor: Reactor): number {
        this.notificarOperarios(reactor)

        reactor.setContadorBarras(0)
        let NuevaTemp: number = 0;
        if (reactor.getTemperatura() > 400) {
            reactor.setEstado(new EstadoCritico());
            reactor.setContadorEstCritico(reactor.getContadorEstCritico() + 1)


        } else {
            reactor.getBarrasDeControl().forEach(valor => {
                while(valor.porcentajeReduccionEnergia() > 0){
                    // Reducir temperatura del reactor segun el porcentaje de enfriamento de la barra
                    NuevaTemp = reactor.getTemperatura() - (reactor.getTemperatura() * valor.porcentajeReduccionEnergia());
                    if (NuevaTemp < 330) {
                        //Si la temperatura paso al rango normal, dejar de usar las barras para reducir la temperatura
                        break;
                    }
                }
                //Por cada barra usada, aumentar el contador
                reactor.setContadorBarras(reactor.getContadorBarras() + 1)
            });
            reactor.setEstado(new EstadoNormal())
            reactor.setTemperatura(NuevaTemp)
            reactor.setContadorEstNormal(reactor.getContadorEstNormal() + 1)
        }
        return reactor.getContadorBarras()
    }

    public eficienciaEneregitaEnEstado(energia: ResultadoEnergia): ResultadoEnergia
    {
        energia.termal = energia.termal * 0.2;
        energia.neta = energia.neta * 0.2;
        return  energia;
    }

    public notificarOperarios(reactor: Reactor): void{
        for (const observador of reactor.getObservadorOperario()) {
            let alerta = new Alerta();
            alerta.setMensaje("El Reactor paso a estado criticidad, iniciar protocolos de enfriamiento")
            alerta.setTemp(reactor.getTemperatura())
            observador.recibirAlerta(alerta);
        }
    }
}

