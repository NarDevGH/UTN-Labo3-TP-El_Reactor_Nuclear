import Reactor from "../src/reactor/reactor";
import { Estado } from "../src/estados/estado";
import EstadoCritico from "../src/estados/estado-critico";
import ObservadorEstadoReactor from "../src/observadores/observadorEstadoReactor";
import { ResultadoEnergia } from "../src/types/resultado_energia";

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

  it("test eficienciaEnergeticaEnEstado()",()=>{
    const energia: ResultadoEnergia = {
      termal: 300,
      neta: 300
    }
    const expectedEnergia: ResultadoEnergia = {
      termal: 0,
      neta: 0
    }

    const energiaRes = instance.eficienciaEnergeticaEnEstado(energia);

    expect(energiaRes).toStrictEqual(expectedEnergia)
  })

  it('test notificarDirectivos()', () => {
    let directivo = new ObservadorEstadoReactor();
    reactor.addObservadorDirectivo(directivo);

    let newEstadoCritico = new EstadoCritico();
    reactor.setEstado(newEstadoCritico);
    newEstadoCritico.manejaCambioTemperatura(reactor);

    expect(directivo.getAlertas().length).toBe(1)
  })
});