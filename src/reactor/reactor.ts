import { Estado } from "../estados/estado";
import { BarrasControl } from "../barras/barras_control";
import EmiteTemperatura from "../types/emiteTemperatura";
import { IObservadorEstadoReactor } from "../observadores/IObservadorEstadoReactor";
import { ResultadoEnergia } from "../types/resultado_energia";




export default class Reactor implements EmiteTemperatura {
    private _temperatura: number;
    private _observadorOperario: IObservadorEstadoReactor[] = [];
    private _observadorDirectivo: IObservadorEstadoReactor[] = [];
    private _contadorEstNormal: number;
    private _contadorEstCriticidad: number;
    private _contadorEstCritico: number;
    private _contadorBarras: number;
    private _estado: Estado;
    private _barrasDeControl: BarrasControl[] = [];





    constructor(
        temperatura: number,
        contadorEstNormal: number,
        contadorEstCriticidad: number,
        contadorEstCritico: number,
        contadorBarras: number,
        estado: Estado
    ) {
        this._temperatura = temperatura;
        this._contadorEstNormal = contadorEstNormal;
        this._contadorEstCriticidad = contadorEstCriticidad;
        this._contadorEstCritico = contadorEstCritico;
        this._contadorBarras = contadorBarras;
        this._estado = estado;
    }


    // GENERAR ENERGIA
    public generarEnergia(): ResultadoEnergia{
        return this._estado.generarEnergia(this.getTemperatura());
    }

    // METODO ENFRIAR
    public enfriar() {
        this._estado.manejaCambioTemperatura(this);
    }

    // Modificar Temperatura
    public cambiarTemperatura(newTemperatura: number) {
        this._temperatura = newTemperatura;
        this._estado.manejaCambioTemperatura(this);
    }

    // Metodos añadir IObservadorEstadoReactores
    public addObservadorOperario(observador: IObservadorEstadoReactor) {
        this._observadorOperario.push(observador);
    }
    public removeObservadorOperario(observador: IObservadorEstadoReactor){
        this._observadorOperario = this._observadorOperario.filter(x => x != observador)
    }
    
    public addObservadorDirectivo(observador:IObservadorEstadoReactor) {
        this._observadorDirectivo.push(observador);
    }
    public removeObservadorDirectivo(observador: IObservadorEstadoReactor){
        this._observadorDirectivo = this._observadorDirectivo.filter(x => x != observador)
    }

    // GETTERS Y SETTERS
    public getTemperatura(): number {
        return this._temperatura;
    }
    public setTemperatura(value: number) {
        this._temperatura = value;
    }
    public getObservadorOperario():IObservadorEstadoReactor[] {
        return this._observadorOperario;
    }
    public getObservadorDirectivo():IObservadorEstadoReactor[] {
        return this._observadorDirectivo;
    }
    public getEstado(): Estado {
        return this._estado;
    }
    public setEstado(value: Estado) {
        this._estado = value;
    }
    public getBarrasDeControl(): BarrasControl[] {
        return this._barrasDeControl;
    }
    public setBarrasDeControl(value: BarrasControl[]) {
        this._barrasDeControl = value;
    }
    public getContadorEstNormal(): number {
        return this._contadorEstNormal;
    }
    public setContadorEstNormal(value: number) {
        this._contadorEstNormal = value;
    }
    public getContadorEstCriticidad(): number {
        return this._contadorEstCriticidad;
    }
    public setContadorEstCriticidad(value: number) {
        this._contadorEstCriticidad = value;
    }
    public getContadorEstCritico(): number {
        return this._contadorEstCritico;
    }
    public setContadorEstCritico(value: number) {
        this._contadorEstCritico = value;
    }
    public getContadorBarras(): number {
        return this._contadorBarras;
    }
    public setContadorBarras(value: number) {
        this._contadorBarras = value;
    }
}