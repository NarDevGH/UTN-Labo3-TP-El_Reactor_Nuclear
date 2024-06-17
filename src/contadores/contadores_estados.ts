export class ContadorEstados{
    private _normal: number = 0;
    private _criticidad: number = 0;
    private _critico: number = 0;

    // GETTERS Y SETTERS
    public getNormal(): number {
        return this._normal;
    }
    public setNormal(value: number) {
        this._normal = value;
    }

    public getCriticidad(): number {
        return this._criticidad;
    }
    public setCriticidad(value: number) {
        this._criticidad = value;
    }

    public getCritico(): number {
        return this._critico;
    }
    public setCritico(value: number) {
        this._critico = value;
    }
}