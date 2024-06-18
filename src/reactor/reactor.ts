import { Observador } from "../observadores/observador";
import { Estado } from "../estados/estado";
import ObservadorOperario from "../observadores/observador-operario";
import ObservadorDirectivo from "../observadores/observador-directivo";
import { BarrasControl } from "../barras/barras_control";
import EmiteTemperatura from "../types/emiteTemperatura";
import Sensor from "../sensor/sens_v1";




export default class Reactor implements EmiteTemperatura{
    private _temperatura: number;
    private _observadorOperario: Observador[] = [];
    private _observadorDirectivo: Observador[] = [];

       // punto 3)v
      private _sensor: Sensor;
    public getSensor(): Sensor {
        return this._sensor;
    }
    public setSensor(value: Sensor) {
        this._sensor = value;
    }
   
   
       private _estado: Estado;
       private _barrasDeControl: BarrasControl[] = [];
   
       // correcto?
       private ContB: ContBarras;
       private ContE: ContadorEstados;
       
       
    
    
    // Constructor
    constructor(temperatura: number, estado: Estado,sensor: Sensor) {
        this._temperatura = temperatura;
        this._estado = estado;
        this._sensor = sensor;
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