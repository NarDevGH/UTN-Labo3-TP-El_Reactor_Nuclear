import { ContBarras } from "../contadores/contador_barras";
import Reactor from "../reactor/reactor";
import { ContadorEstados } from "../contadores/contadores_estados";
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


    // metodo por separado para calcular con horas?
    
    abstract manejaCambioTemperatura(reactor: Reactor, ContB: ContBarras,contE: ContadorEstados ): number;

    abstract notificar(reactor:Reactor): void;
}