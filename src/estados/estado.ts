import Reactor from "../reactor/reactor";
import { ResultadoEnergia } from "../types/resultado_energia";

export abstract class Estado {

    // calculo de energia Original
    calcularEnergia(temperatura: number): ResultadoEnergia {
        // Calculamos la pendiente (m) y el intercepto (b) para la energía termal
        const mTermal = (2500.02 - 2100.0) / (329.98 - 280.00);
        const bTermal = 2100.0 - mTermal * 280.00;
    
        // Calculamos la pendiente (m) y el intercepto (b) para la energía neta
        const mNeta = (700.00 - 100.00) / (329.98 - 280.00);
        const bNeta = 100.00 - mNeta * 280.00;
    
        // Usamos las ecuaciones lineales para calcular la energía termal y neta
        const energiaTermal = mTermal * temperatura + bTermal;
        const energiaNeta = mNeta * temperatura + bNeta;

        return { termal: energiaTermal , neta: energiaNeta  };
    }

    // modificacion: tiempo (horas), porcentaje (%)
    generarEnergia(temperatura: number): ResultadoEnergia {
        const resultado = this.calcularEnergia (temperatura);
        return resultado;
    }


    public energiaGeneradaEnXHoras(reactor: Reactor, horas: number): number
    {
        const cambioDeTemperatura = 8.33;
        let energiaGenerada = reactor.generarEnergia().neta;
    

        for (let hora = 0; hora < horas; hora++) {
            reactor.setTemperatura(reactor.getTemperatura()+cambioDeEnergia)

            energiaGenerada += reactor.generarEnergia().neta;
        }
    
        return energiaGenerada;
    }
    
    abstract manejaCambioTemperatura(reactor: Reactor): number;
}