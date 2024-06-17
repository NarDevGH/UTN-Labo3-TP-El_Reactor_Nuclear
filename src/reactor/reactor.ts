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

       // punto 3)v
       private _observadorTemperatura: Observador;
       public get observadorTemperatura(): Observador {
           return this._observadorTemperatura;
       }
       public set observadorTemperatura(value: Observador) {
           this._observadorTemperatura = value;
       }
   
   
       private _estado: Estado;
       private _barrasDeControl: BarrasControl[] = [];
   
       // correcto?
       private ContB: ContBarras;
       private ContE: ContadorEstados;
       
       
    
    
    // Constructor
    constructor(temperatura: number, estado: Estado) {
        this._temperatura = temperatura;
        this._estado = estado;
    }
    
    // Modificar Temperatura
    public cambiarTemperatura(newTemperatura: number) {
        this._temperatura = newTemperatura;
        this._estado.manejaCambioTemperatura(this,ContB,ContE); // correcto?
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

}