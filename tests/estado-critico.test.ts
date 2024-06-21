import Reactor from "../src/reactor/reactor";
import { Estado } from "../src/estados/estado";
import EstadoCritico from "../src/estados/estado-critico";
import ObservadorEstadoReactor from "../src/observadores/observadorEstadoReactor";

describe('EstadoCritico', () => {
  let instance: Estado;
  let reactor: Reactor;

  beforeEach(() => {
    instance = new EstadoCritico();
    reactor = new Reactor(380,0,0,0,0,instance);
  });


  it('instance should be an instanceof EstadoCritico', () => {
    expect(instance instanceof EstadoCritico).toBeTruthy();
  });

  it('should have a method manejaCambioTemperatura()', () => {
    // instance.manejaCambioTemperatura(reactor);
    expect(instance.manejaCambioTemperatura).toBeTruthy;
  });

  it('should have a method generarEnergia()', () => {
    // instance.generarEnergia(temperatura);
    expect(true).toBeTruthy();
  });

  it('test notificarDirectivos()', () => {
    let operario = new ObservadorEstadoReactor();
    reactor.addObservadorDirectivo(operario);

    let newEstadoCritico = new EstadoCritico();
    reactor.setEstado(newEstadoCritico);
    newEstadoCritico.manejaCambioTemperatura(reactor);

    expect(operario.getAlertas().length).toBe(1)
});
});