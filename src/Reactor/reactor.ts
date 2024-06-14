import EstadoReactor from "./Estados/EstadoReactor";
import EstadoApagado from "./Estados/EstadoApagado";
import InteresadoEnCambioDeEstadoReactor from "../Persona/InteresadoEnCambioDeEstadoReactor";


export default class Reactor {
    private estado!: EstadoReactor;
    public observadores: InteresadoEnCambioDeEstadoReactor[] = []

    constructor(estado?:EstadoReactor) {
        if(estado){
            this.estado = estado;
        }
        else{
            this.estado = new EstadoApagado()
        }
    }

    public getTemperatura():number{
        return this.estado.getTemperatura()
    }
    public setTemperatura(n:number):void{
        this.estado.setTemperatuar(n)
        this.estado.manejarCambioTemperatura(this)
    }

    public setEstado(newEstado: EstadoReactor){
        this.estado = newEstado;
    }

    public addObservador(observador: InteresadoEnCambioDeEstadoReactor) {
        if(this.observadores.includes(observador)){
            console.log("Error: Observadores ya contienen el obervador pasado por parametro")
        }
        else{
            this.observadores.push(observador);
        }
    }

    public removeObservador(observador: InteresadoEnCambioDeEstadoReactor){
        if(this.observadores.includes(observador)){
            this.observadores = this.observadores.filter(x => x!= observador);
        }
        else{
            console.log("Error: Observadores no contienen el obervador pasado por parametro")
        }
    }
}