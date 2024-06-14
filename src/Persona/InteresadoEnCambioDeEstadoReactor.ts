import { InteresesEstadoReactor } from "./persona";
import Notificacion from "../notificacion";


export default interface InteresadoEnCambioDeEstadoReactor {
    recibirNotificacion(notificacion: Notificacion): void;
    estaInteresadoEnEstado(interes: InteresesEstadoReactor): boolean;
}
