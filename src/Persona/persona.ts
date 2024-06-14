import Notificacion from "../notificacion";
import InteresadoEnCambioDeEstadoReactor from "./InteresadoEnCambioDeEstadoReactor";

export enum InteresesEstadoReactor{
    Normal,
    Criticidad,
    Critico,
    Apagado
}
 
export class Persona implements InteresadoEnCambioDeEstadoReactor{

    public interesesEstadoReactor: InteresesEstadoReactor[] = [];

    private notificaciones: Notificacion[] = []
    
    public getNotificaciones():Notificacion[] {
        return this.notificaciones;
    }

    public recibirNotificacion(notificacion: Notificacion): void {
        this.notificaciones.push(notificacion);
    }

    public leerNotificaciones():void{
        //Mostrar por pantalla todas las notificaciones recibidas.
        this.notificaciones.forEach(notificacion =>{
            console.log(notificacion.getContenido())
        })
        //Borrar notificaciones luego de ser leidas.
        this.notificaciones = [];
    }

    public añadirInteresEnEstadoReactor(interes: InteresesEstadoReactor){
        if(this.interesesEstadoReactor.includes(interes)){
            console.log("Persona ya cotiene este interes en sus intereses")
        }

        this.interesesEstadoReactor.push(interes)
    }
    public sacarInteresEnEstadoReactor(interes: InteresesEstadoReactor){
        if(this.interesesEstadoReactor.includes(interes)){
            this.interesesEstadoReactor = this.interesesEstadoReactor.filter(i => i!=interes)
        }
        else{
            console.log("Persona no contiene en sus intereses este interes")
        }
    }

    public estaInteresadoEnEstado(interes: InteresesEstadoReactor):boolean{
        if(this.interesesEstadoReactor.includes(interes)){
            return true 
        }
        return false 
    }
}