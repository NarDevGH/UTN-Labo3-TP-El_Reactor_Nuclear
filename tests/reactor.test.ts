import { Estado } from "../src/estados/estado";
import { BarrasControl } from "../src/barras/barras_control";
import EmiteTemperatura from "../src/types/emiteTemperatura";
import { IObservadorEstadoReactor } from "../src/observadores/IObservadorEstadoReactor";
import { ResultadoEnergia } from "../src/types/resultado_energia";
import Reactor from "../src/reactor/reactor";
import EstadoNormal from "../src/estados/estado-normal";

describe('Reactor', () => {
  let instance: Reactor;
  let estado: EstadoNormal;

  beforeEach(() => {
    estado = new EstadoNormal();
    instance = new Reactor(300,0,0,0,0,estado);
  });

  it('instance should be an instanceof Reactor', () => {
    expect(instance instanceof Reactor).toBeTruthy();
  });

  it('should have a method generarEnergia()', () => {
    // instance.generarEnergia();
    expect(instance.generarEnergia).toBeTruthy();
  });
  
  it('should have a method energiaGeneradaEnXHoras()', () => {
    // instance.energiaGeneradaEnXHoras(horas);
    expect(instance.energiaGeneradaEnXHoras).toBeTruthy();
  });
  
  it('should have a method enfriar()', () => {
    // instance.enfriar();
    expect(instance.enfriar).toBeTruthy();
  });
  
  it('should have a method cambiarTemperatura()', () => {
    // instance.cambiarTemperatura(newTemperatura);
    expect(instance.cambiarTemperatura).toBeTruthy();
  });
  
  it('should have a method addObservadorOperario()', () => {
    // instance.addObservadorOperario(observador);
    expect(instance.addObservadorOperario).toBeTruthy();
  });
  
  it('should have a method removeObservadorOperario()', () => {
    // instance.removeObservadorOperario(observador);
    expect(instance.removeObservadorDirectivo).toBeTruthy();
  });
  
  it('should have a method addObservadorDirectivo()', () => {
    // instance.addObservadorDirectivo(observador);
    expect(instance.addObservadorDirectivo).toBeTruthy();
  });
  
  it('should have a method removeObservadorDirectivo()', () => {
    // instance.removeObservadorDirectivo(observador);
    expect(instance.removeObservadorDirectivo).toBeTruthy();
  });
  
  it('should have a method getTemperatura()', () => {
    // instance.getTemperatura();
    expect(instance.getTemperatura).toBeTruthy();
  });
  
  it('should have a method setTemperatura()', () => {
    // instance.setTemperatura(value);
    expect(instance.setTemperatura).toBeTruthy();
  });
  
  it('should have a method getObservadorOperario()', () => {
    // instance.getObservadorOperario();
    expect(instance.getObservadorOperario).toBeTruthy();
  });
  
  it('should have a method getObservadorDirectivo()', () => {
    // instance.getObservadorDirectivo();
    expect(instance.getObservadorDirectivo).toBeTruthy();
  });
  
  it('should have a method getEstado()', () => {
    // instance.getEstado();
    expect(instance.getEstado).toBeTruthy();
  });
  
  it('should have a method setEstado()', () => {
    // instance.setEstado(value);
    expect(instance.setEstado).toBeTruthy();
  });
  
  it('should have a method getBarrasDeControl()', () => {
    // instance.getBarrasDeControl();
    expect(instance.getBarrasDeControl).toBeTruthy();
  });
  
  it('should have a method setBarrasDeControl()', () => {
    // instance.setBarrasDeControl(value);
    expect(instance.setBarrasDeControl).toBeTruthy();
  });
  
  it('should have a method getContadorEstNormal()', () => {
    // instance.getContadorEstNormal();
    expect(instance.getContadorEstNormal).toBeTruthy();
  });
  
  it('should have a method setContadorEstNormal()', () => {
    // instance.setContadorEstNormal(value);
    expect(instance.setContadorEstNormal).toBeTruthy();
  });
  
  it('should have a method getContadorEstCriticidad()', () => {
    // instance.getContadorEstCriticidad();
    expect(instance.getContadorEstCriticidad).toBeTruthy();
  });
  
  it('should have a method setContadorEstCriticidad()', () => {
    // instance.setContadorEstCriticidad(value);
    expect(instance.setContadorEstCriticidad).toBeTruthy();
  });
  
  it('should have a method getContadorEstCritico()', () => {
    // instance.getContadorEstCritico();
    expect(instance.getContadorEstCritico).toBeTruthy();
  });
  
  it('should have a method setContadorEstCritico()', () => {
    // instance.setContadorEstCritico(value);
    expect(instance.setContadorEstCritico).toBeTruthy();
  });
  
  it('should have a method getContadorBarras()', () => {
    // instance.getContadorBarras();
    expect(instance.getContadorBarras).toBeTruthy();
  });
  
  it('should have a method setContadorBarras()', () => {
    // instance.setContadorBarras(value);
    expect(instance.setContadorBarras).toBeTruthy();
  });
});