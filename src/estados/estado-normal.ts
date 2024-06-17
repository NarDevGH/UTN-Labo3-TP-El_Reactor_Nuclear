import { ContBarras } from "../contadores/contador_barras";
import { ContadorEstados } from "../contadores/contadores_estados";
import Reactor from "../reactor/reactor";
import { Estado } from "./estado";
import EstadoCriticidad from "./estado-criticidad";
import EstadoCritico from "./estado-critico";

export default class EstadoNormal extends Estado{

    public manejaCambioTemperatura(reactor: Reactor, contB: ContBarras,contE: ContadorEstados): number {

        if (reactor.getTemperatura() > 330) {
            reactor.setEstado(new EstadoCriticidad());
            contE.setCriticidad(contE.getCriticidad()+1)
        } else if (reactor.getTemperatura()>400) {
            reactor.setEstado(new EstadoCritico());
            contE.setCritico(contE.getCritico()+1)
        } 
        
        contB.setContador(0);
        return contB.getContador();
    }

    notificar(reactor: Reactor): void {
       return;
    }
}