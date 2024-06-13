import Reactor from "../reactor/reactor";
import { Estado } from "./estado";

export default class EstadoNormal implements Estado{
    public manejaCambioTemperatura(reactor: Reactor) {
        reactor.notificarCritico(); //a Mongomery
    }

    calcularEnergia(temperatura: number): { termal: number; neta: number } {
        // Usamos las ecuaciones lineales para calcular la energía termal y neta
        const energiaTermal = 0;
        const energiaNeta = 0;
    
        return { termal: energiaTermal, neta: energiaNeta };
      }
    }
}