import { Alerta } from "../src/alerta/alerta";
import Reactor from "../src/reactor/reactor";
import { Estado } from "../src/estados/estado";
import EstadoNormal from "../src/estados/estado-normal";


describe('EstadoNormal', () => {
  let instance: Estado;
  let reactor: Reactor;

  beforeEach(() => {
    instance = new EstadoNormal();
    reactor = new Reactor(380,0,0,0,0,instance);
  });

  it('instance should be an instanceof EstadoNormal', () => {
    expect(instance instanceof EstadoNormal).toBeTruthy();
  });

  it('should have a method manejaCambioTemperatura()', () => {
    // instance.manejaCambioTemperatura(reactor);
    expect(typeof instance.manejaCambioTemperatura(reactor)).toBe("number");
  });
});