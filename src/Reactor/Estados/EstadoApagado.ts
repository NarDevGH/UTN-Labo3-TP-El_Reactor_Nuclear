import Reactor from "../reactor";
import EstadoReactor from "./EstadoReactor";
import EstadoNormal from "./EstadoNormal";
import Notificacion from "../../notificacion";
import { InteresesEstadoReactor } from "../../Persona/persona";


export default class EstadoApagado extends EstadoReactor {

    public manejarCambioTemperatura(reactor: Reactor) {
        if (this.temperatura > 0) {
            reactor.setEstado(new EstadoNormal());
        }
    }

    public notificarObservadores(reactor: Reactor) {
        let observadoresInteresados = reactor.observadores.filter(x => x.estaInteresadoEnEstado(InteresesEstadoReactor.Apagado));
        for (const observador of observadoresInteresados) {
            observador.recibirNotificacion(new Notificacion("El reactor paso a estado Criticidad"));
        }
    }
}
