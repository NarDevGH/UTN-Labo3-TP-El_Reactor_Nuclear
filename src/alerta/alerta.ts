export class Alerta{
    private _mensaje: String;
    private _temp: number;

    public getMensaje(): String {
        return this._mensaje;
    }
    public setMensaje(value: String) {
        this._mensaje = value;
    }
    public getTemp(): number {
        return this._temp;
    }
    public setTemp(value: number) {
        this._temp = value;
    }
}