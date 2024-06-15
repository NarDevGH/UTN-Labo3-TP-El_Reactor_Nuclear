import Reactor from "../reactor/reactor";
import { Estado } from "./estado";
import EstadoCriticidad from "./estado-criticidad";

export default class EstadoNormal extends Estado{

    public manejaCambioTemperatura(reactor: Reactor) {
        if (reactor.getTemperatura() > 330) {
            reactor.setEstado(new EstadoCriticidad());
        }
    }
}