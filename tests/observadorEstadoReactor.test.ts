import Reactor from "../src/reactor/reactor"
import EstadoNormal from "../src/estados/estado-normal";
import ObservadorEstadoReactor from "../src/observadores/observadorEstadoReactor"
import { Alerta } from "../src/alerta/alerta";
import { Estado } from "../src/estados/estado";

describe("Tests ObservadorEstadoReactor",()=>{
    let temperaturaDelReactor: number;
    let estado: Estado;
    let reactor: Reactor;

    beforeEach(()=>{
        temperaturaDelReactor = 100;
        estado = new EstadoNormal();
        reactor = new Reactor(temperaturaDelReactor,0,0,0,0,estado);
    })

    describe("RecibirAlerta()",()=>{
        
        let homero = new ObservadorEstadoReactor();
        reactor.addObservadorOperario(homero);

        reactor.setTemperatura(350);

        expect(homero.getAlertas().length).toBe(1);
    })

    describe("getAlertas()",()=>{
        let alerta1 = new Alerta();
        alerta1.setMensaje("El Reactor paso a estado criticidad")
        alerta1.setTemp(reactor.getTemperatura())

        let alerta2 = new Alerta();
        alerta2.setMensaje("El Reactor paso a estado criticidad")
        alerta2.setTemp(reactor.getTemperatura())

        let alerta3 = new Alerta();
        alerta3.setMensaje("El Reactor paso a estado criticidad")
        alerta3.setTemp(reactor.getTemperatura())

        let alertas:Alerta[] = [alerta1,alerta2,alerta3]

        let homero = new ObservadorEstadoReactor();
        reactor.addObservadorOperario(homero);

        reactor.setTemperatura(350);
        reactor.setTemperatura(350);
        reactor.setTemperatura(350);

        expect(homero.getAlertas()).toBe(alertas);
    })
})