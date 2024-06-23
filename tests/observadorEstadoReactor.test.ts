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
    
    test("RecibirAlerta()",()=>{
        
        let homero = new ObservadorEstadoReactor();
        reactor.addObservadorOperario(homero);

        reactor.cambiarTemperatura(350);

        expect(homero.getAlertas().length).toBe(1);
    })

    test("getAlertas()",()=>{
        let alerta1 = new Alerta();
        alerta1.setMensaje("El Reactor paso a estado criticidad, iniciar protocolos de enfriamiento")
        alerta1.setTemp(350)

        let alerta2 = new Alerta();
        alerta2.setMensaje("El Reactor paso a estado criticidad, iniciar protocolos de enfriamiento")
        alerta2.setTemp(350)

        let alerta3 = new Alerta();
        alerta3.setMensaje("El Reactor paso a estado criticidad, iniciar protocolos de enfriamiento")
        alerta3.setTemp(350)

        let alertas:Alerta[] = [alerta1,alerta2,alerta3]

        let homero = new ObservadorEstadoReactor();
        reactor.addObservadorOperario(homero);

        reactor.cambiarTemperatura(350);
        reactor.cambiarTemperatura(350);
        reactor.cambiarTemperatura(350);

        expect(homero.getAlertas() === alertas ).toBeTruthy;
    })
})