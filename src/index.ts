// Principio SOLID: Single Responsibility Principle
class Reactor {
    private temperatura: number;
    private observadores: Observador[] = [];
    private observaMongomery: Observador[] = [];
    private estado: Estado;
    private barrasControl: BarraDeControl[] = [];

    constructor() {
        this.observadores.push(new Trabajador());
        this.observaMongomery.push(new Chief());
    }

    public cambiarTemperatura(newTemperatura: number) {
        this.temperatura = newTemperatura;
        this.estado.manejaCambioTemperatura(this);
    }

    public addObservador(observador: Observador) {
        this.observadores.push(observador);
    }

    public notificarCriticidad() {
        for (const observador of this.observadores) {
            observador.update(this.temperatura);
        }
    }

    public notificarCritico(){
        for (const observador of this.observaMongomery) {
            observador.update(this.temperatura);
        }
    }

    public setEstado(newEstado: Estado){
        this.estado = newEstado;
    }

    public getTemperatura(): number {
        return this.temperatura;
    }
}

// Principio SOLID: Open/Closed Principle
interface Estado {
    manejaCambioTemperatura(reactor: Reactor): void;
}

class EstadoNormal implements Estado {
    public manejaCambioTemperatura(reactor: Reactor) {
        if (reactor.getTemperatura() > 330) {
            reactor.setEstado(new EstadoCriticidad());
        }
    }
}

class EstadoCriticidad implements Estado {
    public manejaCambioTemperatura(reactor: Reactor) {
        if (reactor.getTemperatura() > 400) {
            reactor.setEstado(new EstadoCritico()); 
        } else {
            // Si la temperatura está entre 330 y 400 grados, estamos en estado de criticidad
            // Reducir la capacidad de energía producida en un 80%
            // Enviar alerta a los observadores para activar el control de enfriamiento
            // Llamar a activarMecanismosEnf(dentro de trabajador)
            reactor.notificarObservadores();//a Homero y compañeros
        }
    }
}

class EstadoCritico implements Estado {
    public manejaCambioTemperatura(reactor: Reactor) {
        reactor.notificarObservadores(); //a Mongomery
    }
}

// Principio SOLID: Liskov Substitution Principle
interface Observador {
    update(temperature: number): void;
}

class Trabajador implements Observador {
    public update(temperature: number) {
        if (temperature > 330) {
            console.log('Alerta activar metodo enfriamiento');
        }
    }
}

class Chief implements Observador {
    public update(temperature: number) {
        if (temperature === 0) {
            console.log('Alerta al jefe: El reactor se ha apagado.');
        }
    }
}

// Principio SOLID: Interface Segregation Principle
class BarraDeControl {
    // ...
}

//Falta ver observadores y las barras de control
