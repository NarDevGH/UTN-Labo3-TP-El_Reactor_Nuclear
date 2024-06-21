import { Alerta } from '../src/alerta/alerta';

describe('Alerta', () => {
  let instance: Alerta;

  beforeEach(() => {
    instance = new Alerta();
    instance.setMensaje("Hola Mundo");
    instance.setTemp(200);
  });

  it('instance should be an instanceof Alerta', () => {
    expect(instance instanceof Alerta).toBeTruthy();
  });

  it('should have a method getMensaje()', () => {
    // instance.getMensaje();
    expect(instance.getMensaje()).toBe("Hola Mundo");
  });
  
  it('should have a method setMensaje()', () => {
    // instance.setMensaje(value);
    instance.setMensaje("Mundo Hola")
    expect(instance.getMensaje()).toBe("Mundo Hola");
  });
  
  it('should have a method getTemp()', () => {
    // instance.getTemp();
    expect(instance.getTemp()).toBe(200);
  });
  
  it('should have a method setTemp()', () => {
    // instance.setTemp(value);
    instance.setTemp(300)
    expect(instance.getTemp()).toBe(300);
  });
});