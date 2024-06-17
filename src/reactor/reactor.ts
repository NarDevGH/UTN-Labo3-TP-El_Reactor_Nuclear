import { Observador } from "../observadores/observador";
import { Estado } from "../estados/estado";
import ObservadorOperario from "../observadores/observador-operario";
import ObservadorDirectivo from "../observadores/observador-directivo";
import { BarrasControl } from "../barras/barras_control";
import EmiteTemperatura from "../types/emiteTemperatura";




export default class Reactor implements EmiteTemperatura{
    private _temperatura: number;
    private _observadorOperario: Observador[] = [];
    private _observadorDirectivo: Observador[] = [];
    private estado: Estado;
    private _barrasDeControl: BarrasControl[] = [];
    
    
    
    // Constructor
    constructor(temperatura: number, estado: Estado) {
        this._temperatura = temperatura;
        this.estado = estado;
    }
    
    // Modificar Temperatura
    public cambiarTemperatura(newTemperatura: number) {
        this._temperatura = newTemperatura;
        this.estado.manejaCambioTemperatura(this);
    }
    
    // Metodos añadir Observadores
    public addObservadorOperario(observador: Observador) {
        this._observadorOperario.push(observador);
    }
    
    public addObservadorDirectivo(observador: Observador) {
        this._observadorDirectivo.push(observador);
    }
    
    public setEstado(newEstado: Estado){
        this.estado = newEstado;
    }
    
    public getTemperatura(): number {
        return this._temperatura;
    }
    public setTemperatura(value: number) {
        this._temperatura = value;
    }
    
    public getObservadorOperario(): Observador[] {
        return this._observadorOperario;
    }
    
    public getObservadorDirectivo(): Observador[] {
        return this._observadorDirectivo;
    }
    
    public getBarrasDeControl(): BarrasControl[] {
        return this._barrasDeControl;
    }
    
}