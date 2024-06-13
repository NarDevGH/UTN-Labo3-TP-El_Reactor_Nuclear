import { Estado } from "./estado";

export default class EstadoNormal implements Estado{
    public manejaCambioTemperatura(reactor: Reactor) {
        if (reactor.getTemperatura() > 400) {
            reactor.setEstado(new estadoCritico()); 
        } else {
            // Si la temperatura está entre 330 y 400 grados, estamos en estado de criticidad
            // Reducir la capacidad de energía producida en un 80%

            // Enviar alerta a los observadores para activar el control de enfriamiento
            // Llamar a activarMecanismosEnf(dentro de trabajador)
            reactor.notificarCriticidad();//a Homero y compañeros
        }
    }
}