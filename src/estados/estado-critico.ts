import { Alerta } from "../alerta/alerta";
import Reactor from "../reactor/reactor";
import { ResultadoEnergia } from "../types/resultado_energia";
import { Estado } from "./estado";
import EstadoNormal from "./estado-normal";

export default class EstadoCritico extends Estado {
    public manejaCambioTemperatura(reactor: Reactor): number {
        reactor.setContadorBarras(0)
        let NuevaTemp: number = 0;
        reactor.getBarrasDeControl().forEach(valor => {
            while (NuevaTemp > 330) {  // LE AGREGAMOS CONDICIONAL
                NuevaTemp = reactor.getTemperatura() - (valor.getTiempoVida() / 3600) * 100;
                reactor.setContadorBarras(reactor.getContadorBarras() + 1)
            }
        });
        reactor.setTemperatura(NuevaTemp)
        reactor.setContadorEstNormal(reactor.getContadorEstNormal() + 1)
        reactor.setEstado(new EstadoNormal()); 
        this.notificarDirectivos(reactor);
        return reactor.getContadorBarras()
    }

    generarEnergia(temperatura: number): ResultadoEnergia {
        const resultado = this.calcularEnergia(temperatura);
        resultado.termal = resultado.termal * 0;
        resultado.neta = resultado.neta * 0;
        return resultado;
    }

    public notificarDirectivos(reactor: Reactor): void{
        for (const observador of reactor.getObservadorDirectivo()) {
            let alerta = new Alerta();
            alerta.setMensaje("El reactor se encuentra en estado critico, procederá a apagarse")
            alerta.setTemp(reactor.getTemperatura())
            observador.recibirAlerta(alerta);
        }

    }
}