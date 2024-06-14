import Reactor from "../reactor";
import Notificacion from "../../notificacion";
import EstadoCritico from "./EstadoCritico";
import EstadoReactor from "./EstadoReactor";
import { InteresesEstadoReactor } from "../../Persona/persona";


export default class EstadoCriticidad extends EstadoReactor {
    public manejarCambioTemperatura(reactor: Reactor) {
        if (this.temperatura > 400) {
            reactor.setEstado(new EstadoCritico());
        }
    }

    public notificarObservadores(reactor: Reactor) {
        let observadoresInteresados = reactor.observadores.filter(x => x.estaInteresadoEnEstado(InteresesEstadoReactor.Criticidad));
        for (const observador of observadoresInteresados) {
            observador.recibirNotificacion(new Notificacion("El reactor paso a estado Criticidad"));
        }
    }
}
