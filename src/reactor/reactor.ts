import { Observador } from "../observadores/observador";
import { Estado } from "../estados/estado";
import { BarrasControl } from "../barras/barras_control";
import EmiteTemperatura from "../types/emiteTemperatura";




export default class Reactor implements EmiteTemperatura {
    private _temperatura: number;
    private _observadorOperario: Observador[] = [];
    private _observadorDirectivo: Observador[] = [];
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
    public generarEnergia() {
        this._estado.generarEnergia(this.getTemperatura());
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

    // Metodos añadir Observadores
    public addObservadorOperario(observador: Observador) {
        this._observadorOperario.push(observador);
    }

    public addObservadorDirectivo(observador: Observador) {
        this._observadorDirectivo.push(observador);
    }

    // GETTERS Y SETTERS
    public getTemperatura(): number {
        return this._temperatura;
    }
    public setTemperatura(value: number) {
        this._temperatura = value;
    }
    public getObservadorOperario(): Observador[] {
        return this._observadorOperario;
    }
    public setObservadorOperario(value: Observador[]) {
        this._observadorOperario = value;
    }
    public getObservadorDirectivo(): Observador[] {
        return this._observadorDirectivo;
    }
    public setObservadorDirectivo(value: Observador[]) {
        this._observadorDirectivo = value;
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