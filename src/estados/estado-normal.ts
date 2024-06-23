import { Alerta } from "../alerta/alerta";
import Reactor from "../reactor/reactor";
import { ResultadoEnergia } from "../types/resultado_energia";
import { Estado } from "./estado";
import EstadoCriticidad from "./estado-criticidad";
import EstadoCritico from "./estado-critico";

export default class EstadoNormal extends Estado{

    public manejaCambioTemperatura(reactor: Reactor): number {
        if (reactor.getTemperatura() > 330) {
            const newEstado = new EstadoCriticidad();
            reactor.setEstado(newEstado);
            newEstado.manejaCambioTemperatura(reactor);
            reactor.setContadorEstCriticidad(reactor.getContadorEstCriticidad()+1)
        } else if (reactor.getTemperatura()>400) {
            const newEstado = new EstadoCritico();
            reactor.setEstado(newEstado);
            newEstado.manejaCambioTemperatura(reactor);
            reactor.setContadorEstCritico(reactor.getContadorEstCritico()+1)

        } 
        
        reactor.setContadorBarras(0);
        return reactor.getContadorBarras();
    }

    public eficienciaEneregitaEnEstado(energia: ResultadoEnergia): ResultadoEnergia
    {
        return  energia;
    }
}