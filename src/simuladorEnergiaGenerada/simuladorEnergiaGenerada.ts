import Reactor from "../reactor/reactor";


export default class SimuladorEnergiaGenerada{
    private minValueCambioAleatorioDeTemperatura;
    private maxValueCambioAleatorioDeTemperatura;

    constructor(min: number, max: number){
        this.minValueCambioAleatorioDeTemperatura = min;
        this.maxValueCambioAleatorioDeTemperatura = max;
    }

    // GETTERS & SETTERS
    public getMinValueCambioAleatorioDeTemperatura(): number 
    {
        return this.minValueCambioAleatorioDeTemperatura;
    }
    public getMaxValueCambioAleatorioDeTemperatura(): number 
    {
        return this.maxValueCambioAleatorioDeTemperatura;
    }
    public setMinValueCambioAleatorioDeTemperatura(value: number):void{
        this.minValueCambioAleatorioDeTemperatura = value;
    }
    public setManValueCambioAleatorioDeTemperatura(value: number):void{
        this.maxValueCambioAleatorioDeTemperatura = value;
    }

    // METODOS
    private cambioAleatoriaDeTemperatura = (min: number, max: number) =>{
        return Math.random() * (max - min) + min;
    }

    public energiaGeneradaPorReactorEnXHoras(reactor: Reactor, horas: number): number
    {
        let energiaGenerada = reactor.generarEnergia().neta;
    
        for (let hora = 1; hora < horas; hora++) {
            reactor.setTemperatura(reactor.getTemperatura()+this.cambioAleatoriaDeTemperatura(this.minValueCambioAleatorioDeTemperatura,this.maxValueCambioAleatorioDeTemperatura))
            energiaGenerada += reactor.generarEnergia().neta;
        }
    
        return energiaGenerada;
    }
}