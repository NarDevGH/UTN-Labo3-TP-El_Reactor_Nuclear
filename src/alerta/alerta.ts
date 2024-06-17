export class Alerta{
    private _mensaje: String;

    public getMensaje(): String {
        return this._mensaje;
    }
    public setMensaje(value: String) {
        this._mensaje = value;
    }
}