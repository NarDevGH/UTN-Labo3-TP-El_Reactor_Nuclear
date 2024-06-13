
import Notificacion from "./notificacion";
import { ReceptorNotificacion } from "./notificacion";

abstract class EstadoReactor {
    protected reactor: Reactor;
    protected temperatura!: number;

    private mensajeNotificacion: string = "";
    private observadores: ReceptorNotificacion[] = []

    constructor(reactor: Reactor){
        this.reactor = reactor
    }

    abstract setTemperatuar(n:number): void;
    public getTemperatura(): number{
        return this.temperatura;
    }

    public addObservador(observador: ReceptorNotificacion) {
        if(this.observadores.includes(observador)){
            console.log("Error: Observadores ya contienen el obervador pasado por parametro")
        }
        else{
            this.observadores.push(observador);
        }
    }

    public removeObservador(observador: ReceptorNotificacion){
        if(this.observadores.includes(observador)){
            this.observadores = this.observadores.filter(x => x!= observador);
        }
        else{
            console.log("Error: Observadores no contienen el obervador pasado por parametro")
        }
    }

    public setMensajeNotificacion(mensaje: string){
        this.mensajeNotificacion = mensaje;
    }

    public notificarObservadores() {
        for (const observador of this.observadores) {
            observador.recibirNotificacion(new Notificacion(this.mensajeNotificacion));
        }
    }
}

export class EstadoNormal extends EstadoReactor {

    public setTemperatuar(n:number): void{
        this.temperatura = n;
        if (this.temperatura > 330) {
            this.reactor.setEstado(new EstadoCriticidad(this.reactor));
        }
    }
}

export class EstadoCriticidad extends EstadoReactor {
    public setTemperatuar(n:number): void
    {
        this.temperatura = n;
        if (this.temperatura > 400) {
            this.reactor.setEstado(new EstadoCritico(this.reactor)); 
        } 
    }
}

export class EstadoCritico extends EstadoReactor {
    public setTemperatuar(n:number): void{
        this.reactor.setEstado(new EstadoApagado(this.reactor));
    }
}

export class EstadoApagado extends EstadoReactor {
    public setTemperatuar(n:number): void{
        console.log("Error: El reactor se encuentra apagado")
    }
}

export default class Reactor {
    private estado!: EstadoReactor;

    constructor(estado?:EstadoReactor) {
        if(estado){
            this.estado = estado;
        }
        else{
            this.estado = new EstadoApagado(this)
        }
    }

    public getTemperatura():number{
        return this.estado.getTemperatura()
    }
    public setTemperatura(n:number):void{
        return this.estado.setTemperatuar(n)
    }

    public setEstado(newEstado: EstadoReactor){
        this.estado = newEstado;
        this.estado.notificarObservadores();
    }
}