import Notificacion from "./notificacion";
import { ReceptorNotificacion } from "./notificacion";

export class Persona implements ReceptorNotificacion{
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
}