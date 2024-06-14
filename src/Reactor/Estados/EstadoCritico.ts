import Reactor from "../reactor";
import EstadoReactor from "./EstadoReactor";
import EstadoApagado from "./EstadoApagado";


export default class EstadoCritico extends EstadoReactor {
    public manejarCambioTemperatura(reactor: Reactor) {
        let estadoApagado = new EstadoApagado();
        reactor.setEstado(estadoApagado);
        estadoApagado.notificarObservadores(reactor);
    }

    protected energiaModificadaPorEstado(energia: number): number {
        throw new Error("Method not implemented.");
    }
}
