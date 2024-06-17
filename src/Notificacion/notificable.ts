import Notificacion from "./notificacion";

export default interface Notificable {
    recibirNotificacion(notificacion: Notificacion): void;
    leerNotificaciones(): void;
}