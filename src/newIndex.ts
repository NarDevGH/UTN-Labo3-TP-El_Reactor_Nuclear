// Principio SOLID: Single Responsibility Principle
class Reactor {
    private temperatura!: number;
    private observadorOperario: Observador[] = [];
    private observadorDirectivo: Observador[] = [];
    private estado!: Estado;
    private barrasDeControl: BarraControl[] = [];

    constructor() {
        this.observadorOperario.push(new Operario());
        this.observadorDirectivo.push(new Directivo());
    }

    public cambiarTemperatura(newTemperatura: number) {
        this.temperatura = newTemperatura;
        this.estado.manejaCambioTemperatura(this);
    }

    // metodos para añadir operarios o directivos
    public addObservadorOperario(observador: Observador) {
        this.observadorOperario.push(observador);
    }

    public addObservadorDirectivo(observador: Observador) {
        this.observadorDirectivo.push(observador);
    }

    // metodo para generar alerta Operarios
    public notificarCriticidad() {
        for (const observador of this.observadorOperario) {
            observador.update(this.temperatura);
        }
    }

    // metodo para generar alerta Directivos
    // Esta notificación suponiendo que los operarios solo tengan 1 aviso a partir de los 330°
    public notificarCritico(){
        for (const observador of this.observadorDirectivo) {
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

class estadoNormal implements Estado {
    public manejaCambioTemperatura(reactor: Reactor) {
        if (reactor.getTemperatura() > 330) {
            reactor.setEstado(new estadoCriticidad());
        }
    }
}

class estadoCriticidad implements Estado {
    public manejaCambioTemperatura(reactor: Reactor) {
        if (reactor.getTemperatura() > 400) {
            reactor.setEstado(new estadoCritico()); 
        } else {
            // Si la temperatura está entre 330 y 400 grados, estamos en estado de criticidad
            // Reducir la capacidad de energía producida en un 80%

            // Enviar alerta a los observadores para activar el control de enfriamiento
            // Llamar a activarMecanismosEnf(dentro de trabajador)
            reactor.notificarCriticidad();//a Homero y compañeros
        }
    }
}

class estadoCritico implements Estado {
    public manejaCambioTemperatura(reactor: Reactor) {
        reactor.notificarCritico(); //a Mongomery
    }
}

// Principio SOLID: Liskov Substitution Principle
interface Observador {
    update(temperature: number): void;
}

class Operario implements Observador {
    public update(temperature: number) {
        if (temperature > 330) {
            console.log('Alerta activar metodo enfriamiento');
        }
    }
}

class Directivo implements Observador {
    public update(temperature: number) {
        if (temperature === 0) {
            console.log('Alerta al jefe: El reactor se ha apagado.');
        }
    }
}

// Principio SOLID: Interface Segregation Principle
class BarraControl {
    // ...
}

//Falta ver observadores y las barras de control