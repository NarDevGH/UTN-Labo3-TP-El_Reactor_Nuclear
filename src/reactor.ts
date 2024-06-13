
// Principio SOLID: Open/Closed Principle
abstract class EstadoReactor {
    private temperatura!: number;
    private observadores: Observador[] = []

    abstract getTemperatura(): number;
    abstract setTemperatuar(n:Number): void;

    public addObservador(observador: Observador) {
        if(this.observadores.includes(observador)){
            console.log("Error: Observadores ya contienen el obervador pasado por parametro")
        }
        else{
            this.observadores.push(observador);
        }
    }

    public removeObservador(observador: Observador){
        if(this.observadores.includes(observador)){
            this.observadores = this.observadores.filter(x => x!= observador);
        }
        else{
            console.log("Error: Observadores no contienen el obervador pasado por parametro")
        }
    }

    public notificarObservadores() {
        for (const observador of this.observadores) {
            observador.update(this.temperatura);
        }
    }
}

class EstadoNormal implements EstadoReactor {

    protected getTemperatura(): number;
    protected setTemperatuar(n:Number): void;

    public manejaCambioTemperatura(reactor: Reactor) {
        if (reactor.getTemperatura() > 330) {
            reactor.setEstado(new estadoCriticidad());
        }
    }
}

class EstadoCriticidad implements EstadoReactor {
    protected getTemperatura(): number;
    protected setTemperatuar(n:Number): void;

    public manejaCambioTemperatura(reactor: Reactor) {
        if (reactor.getTemperatura() > 400) {
            reactor.setEstado(new estadoCritico()); 
        } else {
            // Si la temperatura está entre 330 y 400 grados, estamos en EstadoReactor de criticidad
            // Reducir la capacidad de energía producida en un 80%

            // Enviar alerta a los observadores para activar el control de enfriamiento
            // Llamar a activarMecanismosEnf(dentro de trabajador)
            reactor.notificarCriticidad();//a Homero y compañeros
        }
    }
}

class EstadoCritico implements EstadoReactor {
    protected getTemperatura(): number;
    protected setTemperatuar(n:Number): void;

    public manejaCambioTemperatura(reactor: Reactor) {
        reactor.notificarCritico(); 
    }
}

class EstadoApagado implements EstadoReactor {
    protected getTemperatura(): number;
    protected setTemperatuar(n:Number): void;

    public manejaCambioTemperatura(reactor: Reactor) {
        reactor.notificarCritico(); //a Mongomery
    }
}

export class Reactor {
    private estado!: EstadoReactor;

    constructor(estado?:EstadoReactor) {
        if(estado){
            this.estado = estado;
        }
        else{
            this.estado = new EstadoApagado()
        }
    }

    public getTemperatura():Number{
        return this.estado.getTemperatura()
    }
    public setTemperatura(n:Number):void{
        return this.estado.setTemperatuar(n)
    }

    public setEstado(newEstado: EstadoReactor){
        this.estado = newEstado;
        this.estado.notificarObservadores();
    }
}