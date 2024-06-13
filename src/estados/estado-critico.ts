import Reactor from "../reactor/reactor";
import { Estado } from "./estado";

export default class EstadoNormal implements Estado{
    public manejaCambioTemperatura(reactor: Reactor) {
        reactor.notificarCritico(); //a Mongomery
    }
}