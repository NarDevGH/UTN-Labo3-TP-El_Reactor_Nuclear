import Reactor from "../reactor/reactor";

export interface Estado {

    manejaCambioTemperatura(reactor: Reactor): void;
}