export class BarrasControl {
    private _tiempoVida: number;

    constructor (_tiempoVida: number){
        this._tiempoVida = _tiempoVida;
    }
    
    public getTiempoVida(): number {
        return this._tiempoVida;
    }
    public setTiempoVida(value: number) {
        if(value < 0){
            this._tiempoVida = 0;
            return;
        }
        this._tiempoVida = value;
    }

    public porcentajeReduccionEnergia():number{
        const porcentaje = (this._tiempoVida / 3600) * 100;
        return porcentaje;
    }
}