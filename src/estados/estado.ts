import Reactor from "../reactor/reactor";

export interface Estado {
    generarEnergia(temperatura: number): { termal: number; neta: number };
    manejaCambioTemperatura(reactor: Reactor): void;
}