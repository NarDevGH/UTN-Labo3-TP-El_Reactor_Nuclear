export class BarrasControl {
    private _tiempoVida: number;

    constructor (_tiempoVida: number){
        this._tiempoVida = _tiempoVida;
    }
    
    public getTiempoVida(): number {
        return this._tiempoVida;
    }
    public setTiempoVida(value: number) {
        this._tiempoVida = value;
    }
}