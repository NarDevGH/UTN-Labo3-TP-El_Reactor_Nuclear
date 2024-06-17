import Persona from "./persona";
import Notificable from "../Notificacion/notificable";
import Notificacion from "../Notificacion/notificacion";
import InteresesEstadoReactor from "../types/interesesEstadoReactor";
import InteresadoEnCambioDeEstadoReactor from "./interesadoEnCambioDeEstadoReactor";

export default class ObvservadorEstadoReactor extends Persona implements Notificable,InteresadoEnCambioDeEstadoReactor{
    
    private notificaciones: Notificacion[] = []
    public interesesEstadoReactor: InteresesEstadoReactor[] = [];
    
    constructor(nombre: string, apellido:string){
        super(nombre,apellido)
    }

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