import { Observador } from "../observadores/observador";
import { Estado } from "../estados/estado";
import ObservadorOperario from "../observadores/observador-operario";
import ObservadorDirectivo from "../observadores/observador-directivo";
// agregar import barra control


export default class Reactor {
    private temperatura: number;
    private observadorOperario: Observador[] = [];
    private observadorDirectivo: Observador[] = [];
    private estado: Estado;
    private barrasDeControl: BarraControl[] = [];

    // revisar constructor
    constructor(temperatura: number, estado: Estado) {
        this.temperatura = temperatura;
        this.estado = estado;
        this.observadorOperario.push(new ObservadorOperario());
        this.observadorDirectivo.push(new ObservadorDirectivo());
    }

    public cambiarTemperatura(newTemperatura: number) {
        this.temperatura = newTemperatura;
        this.estado.manejaCambioTemperatura(this);
    }

    // metodos para añadir operarios o directivos
    public addObservadorOperario(observador: Observador) {
        this.observadorOperario.push(observador);
    }

    public addObservadorDirectivo(observador: Observador) {
        this.observadorDirectivo.push(observador);
    }

    // metodo para generar alerta Operarios
    public notificarCriticidad() {
        for (const observador of this.observadorOperario) {
            observador.update(this.temperatura);
        }
    }

    // metodo para generar alerta Directivos
    // Esta notificación suponiendo que los operarios solo tengan 1 aviso a partir de los 330°
    public notificarCritico(){
        for (const observador of this.observadorDirectivo) {
            observador.update(this.temperatura);
        }
    }

    public setEstado(newEstado: Estado){
        this.estado = newEstado;
    }

    public getTemperatura(): number {
        return this.temperatura;
    }
}