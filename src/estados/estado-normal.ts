import Reactor from "../reactor/reactor";
import { Estado } from "./estado";
import EstadoCriticidad from "./estado-criticidad";
import EstadoCritico from "./estado-critico";

export default class EstadoNormal extends Estado{

    public manejaCambioTemperatura(reactor: Reactor): number {
        if (reactor.getTemperatura() > 330) {
            reactor.setEstado(new EstadoCriticidad());
            reactor.setContadorEstCriticidad(reactor.getContadorEstCriticidad()+1)
        } else if (reactor.getTemperatura()>400) {
            reactor.setEstado(new EstadoCritico());
            reactor.setContadorEstCritico(reactor.getContadorEstCritico()+1)

        } 
        
        reactor.setContadorBarras(0);
        return reactor.getContadorBarras();
    }

    notificar(reactor: Reactor): void {
       return;
    }
}