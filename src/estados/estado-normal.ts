import { Estado } from "./estado";

export default class EstadoNormal implements Estado{
    public manejaCambioTemperatura(reactor: Reactor) {
        if (reactor.getTemperatura() > 330) {
            reactor.setEstado(new estadoCriticidad());
        }
    }
}