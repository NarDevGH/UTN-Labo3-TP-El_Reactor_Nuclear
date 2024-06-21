import { Alerta } from "../alerta/alerta";
import Reactor from "../reactor/reactor";
import { ResultadoEnergia } from "../types/resultado_energia";
import { Estado } from "./estado";
import EstadoCritico from "./estado-critico";
import EstadoNormal from "./estado-normal";

export default class EstadoCriticidad extends Estado {

    manejaCambioTemperatura(reactor: Reactor): number {
        this.notificarOperarios(reactor)

        reactor.setContadorBarras(0)
        let NuevaTemp: number = 0;
        if (reactor.getTemperatura() > 400) {
            reactor.setEstado(new EstadoCritico());
            reactor.setContadorEstCritico(reactor.getContadorEstCritico() + 1)


        } else {
            reactor.getBarrasDeControl().forEach(valor => {
                while (NuevaTemp > 330) {
                    NuevaTemp = reactor.getTemperatura() - (valor.getTiempoVida() / 3600) * 100;
                    reactor.setContadorBarras(reactor.getContadorBarras() + 1)
                }
            });
            reactor.setEstado(new EstadoNormal())
            reactor.setTemperatura(NuevaTemp)
            reactor.setContadorEstNormal(reactor.getContadorEstNormal() + 1)
        }
        return reactor.getContadorBarras()
    }

    override generarEnergia(temperatura: number): ResultadoEnergia {
        const resultado = this.calcularEnergia(temperatura);
        resultado.termal = resultado.termal * 0.2;
        resultado.neta = resultado.neta * 0.2;
        return resultado;
    }

    public notificarOperarios(reactor: Reactor): void{
        for (const observador of reactor.getObservadorOperario()) {
            let alerta = new Alerta();
            alerta.setMensaje("El Reactor paso a estado criticidad")
            alerta.setTemp(reactor.getTemperatura())
            observador.recibirAlerta(alerta);
        }
    }
}

