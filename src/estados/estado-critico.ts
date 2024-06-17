import { ContBarras } from "../contadores/contador_barras";
import { ContadorEstados } from "../contadores/contadores_estados";
import Reactor from "../reactor/reactor";
import { ResultadoEnergia } from "../types/resultado_energia";
import { Estado } from "./estado";

export default class EstadoCritico extends Estado{
    public manejaCambioTemperatura(reactor: Reactor, contB: ContBarras,contE: ContadorEstados): number {
        contB.setContador(0);
        let NuevaTemp: number = 0;
        reactor.getBarrasDeControl().forEach(valor => {
            while (NuevaTemp > 330 && reactor.getBarrasDeControl.length > 0) {
            NuevaTemp = reactor.getTemperatura() - (valor.getTiempoVida()/3600)*100;
            contB.setContador(contB.getContador() + 1)
            }
        });
        reactor.setTemperatura(NuevaTemp)
        contE.setNormal(contE.getNormal()+1)

        return contB.getContador();
    }

    generarEnergia(temperatura: number): ResultadoEnergia {
        const resultado = this.calcularEnergia (temperatura);
        resultado.termal = resultado.termal*0;
        resultado.neta = resultado.neta*0;
        return resultado;
    }

    public notificar(reactor: Reactor) {
        for (const observador of reactor.getObservadorDirectivo()) {
            observador.update(reactor.getTemperatura());
        }
    }
}