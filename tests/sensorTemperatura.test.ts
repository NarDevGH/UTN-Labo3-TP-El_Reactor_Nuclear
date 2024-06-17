import SensorTemperatura, { EmisorDeTemperaturaNoSeteado } from '../src/sensor/sensorTemperatura'
import Reactor from "../src/reactor/reactor"
import EstadoNormal from "../src/estados/estado-normal"

describe("Tests Sensor de Temperatura",()=>{
    let estadoNormal: EstadoNormal

    beforeEach(()=>{
        estadoNormal = new EstadoNormal();
    })

    describe("Obtener emisor de temperatura.",()=>{
        const temperaturaDelReactor = 304.99;
        let reactor = new Reactor(temperaturaDelReactor,estadoNormal);
        let sensorTemperatura = new SensorTemperatura(reactor);
        
        expect(sensorTemperatura.getEmisorTemperatura()).toBe(reactor);
    })

    describe("Throw EmisorDeTemperaturaNoSeteado si el emisor de temperatura no esta seteado.",()=>{
        let sensorTemperatura = new SensorTemperatura();
        
        expect(sensorTemperatura.getEmisorTemperatura()).toThrow(EmisorDeTemperaturaNoSeteado);
    })

    describe("Cambiar el emisor de temperatura.",()=>{
        const temperaturaDelReactor = 304.99;
        let reactor = new Reactor(temperaturaDelReactor,estadoNormal);
        let sensorTemperatura = new SensorTemperatura(reactor);

        let reactor2 = new Reactor(280,estadoNormal);
        sensorTemperatura.setEmisorTemperatura(reactor2)

        expect(sensorTemperatura.getEmisorTemperatura()).toBe(reactor2);
    })

    describe("Obtener lectura del emisor de temperatura.",()=>{
        const temperaturaDelReactor = 304.99;
        let reactor = new Reactor(temperaturaDelReactor,estadoNormal);
        let sensorTemperatura = new SensorTemperatura(reactor);
        
        expect(sensorTemperatura.lecturaDeTemperatura()).toBe(temperaturaDelReactor);
    })
})