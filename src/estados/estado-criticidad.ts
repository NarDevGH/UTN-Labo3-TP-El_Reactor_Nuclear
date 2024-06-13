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
    generarEnergia(temperatura: number): { termal: number; neta: number } {
        // Calculamos la pendiente (m) y el intercepto (b) para la energía termal
        const mTermal = (2500.02 - 2100.0) / (329.98 - 280.00);
        const bTermal = 2100.0 - mTermal * 280.00;
    
        // Calculamos la pendiente (m) y el intercepto (b) para la energía neta
        const mNeta = (700.00 - 100.00) / (329.98 - 280.00);
        const bNeta = 100.00 - mNeta * 280.00;
    
        // Usamos las ecuaciones lineales para calcular la energía termal y neta
        const energiaTermal = (mTermal * temperatura + bTermal)*0.2;
        const energiaNeta = (mNeta * temperatura + bNeta)*0.2;
    

        return { termal: energiaTermal, neta: energiaNeta };
      }
    }
}

