import Reactor from "../reactor";
import EstadoReactor from "./EstadoReactor";
import EstadoNormal from "./EstadoNormal";
import Notificacion from "../../Notificacion/notificacion";
import InteresesEstadoReactor from "../../types/interesesEstadoReactor";


export default class EstadoApagado extends EstadoReactor {
    public manejarCambioTemperatura(reactor: Reactor) {
        if (this.temperatura > 0) {
            reactor.setEstado(new EstadoNormal());
        }
    }
    
    public notificarObservadores(reactor: Reactor) {
        let observadoresInteresados = reactor.observadores.filter(x => x.estaInteresadoEnEstado(InteresesEstadoReactor.Apagado));
        for (const observador of observadoresInteresados) {
            observador.recibirNotificacion(new Notificacion("El reactor paso a estado Apagado"));
        }
    }

    protected energiaModificadaPorEstado(energia: number): number {
        return energia * 0;
    }
}
