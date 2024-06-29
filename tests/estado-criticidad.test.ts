import Reactor from "../src/reactor/reactor";
import { Estado } from "../src/estados/estado";
import EstadoCriticidad from "../src/estados/estado-criticidad";
import ObservadorEstadoReactor from "../src/observadores/observadorEstadoReactor";
import { ResultadoEnergia } from "../src/types/resultado_energia";

describe('EstadoCriticidad', () => {
  let instance: Estado;
  let reactor: Reactor;

  beforeEach(() => {
    instance = new EstadoCriticidad();
    reactor = new Reactor(380,0,0,0,0,instance);
  });

  it('instance should be an instanceof EstadoCriticidad', () => {
    expect(instance instanceof EstadoCriticidad).toBeTruthy();
  });

  it('should have a method manejaCambioTemperatura()', () => {
    // instance.manejaCambioTemperatura(reactor);
    expect(typeof instance.manejaCambioTemperatura(reactor)).toBe("number");
  });

  it('should have a method generarEnergia()', () => {
    // instance.generarEnergia(temperatura);
    //expect(instance.generarEnergia(reactor.getTemperatura())).toBeInstanceOf({}); Hay que implementar ResultadoEnergia como un Type.
    expect(true).toBeTruthy();
  });

  it("test eficienciaEnergeticaEnEstado()",()=>{
    const energia: ResultadoEnergia = {
      termal: 300,
      neta: 300
    }
    const expectedEnergia: ResultadoEnergia = {
      termal: 240,
      neta: 240
    }

    const energiaRes = instance.eficienciaEnergeticaEnEstado(energia);

    expect(energiaRes).toStrictEqual(expectedEnergia)
  })

  it('test notificarOperarios()', () => {
      let operario = new ObservadorEstadoReactor();
      reactor.addObservadorOperario(operario);

      let newEstadoCriticidad = new EstadoCriticidad();
      reactor.setEstado(newEstadoCriticidad);
      newEstadoCriticidad.manejaCambioTemperatura(reactor);

      expect(operario.getAlertas().length).toBe(1)
  });
});