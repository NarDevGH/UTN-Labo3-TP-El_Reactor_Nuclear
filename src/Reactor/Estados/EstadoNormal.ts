import Reactor from "../reactor";
import EstadoReactor from "./EstadoReactor";
import EstadoCriticidad from "./EstadoCriticidad";


export default class EstadoNormal extends EstadoReactor {
    public manejarCambioTemperatura(reactor: Reactor) {
        if (this.temperatura > 330) {
            let estadoCriticidad = new EstadoCriticidad();
            reactor.setEstado(estadoCriticidad);
            estadoCriticidad.notificarObservadores(reactor);
        }
    }
}
