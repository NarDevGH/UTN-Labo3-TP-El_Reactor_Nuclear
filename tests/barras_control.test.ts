import { BarrasControl } from '../src/barras/barras_control';

describe('BarrasControl', () => {
  let instance: BarrasControl;

  beforeEach(() => {
    instance = new BarrasControl(100);
  });

  it('instance should be an instanceof BarrasControl', () => {
    expect(instance instanceof BarrasControl).toBeTruthy();
  });

  it('should have a method getTiempoVida()', () => {
    // instance.getTiempoVida();
    expect(instance.getTiempoVida()).toBe(100);
  });
  
  it('should have a method setTiempoVida()', () => {
    // instance.setTiempoVida(value);
    instance.setTiempoVida(200)
    expect(instance.getTiempoVida()).toBe(200);
  });
});