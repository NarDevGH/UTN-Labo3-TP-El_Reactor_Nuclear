

interface Temperatura{
    getTemperatura():number
}

class Reactor implements Temperatura{
    public getTemperatura():number {return 100}
}


abstract class MecanismoDeSeguridad{
    abstract private temperaturaAEnfriar: Temperatura

    abstract public setTemperaturaAEnfriar(c: Temperatura): void
    abstract public getTemperatura(): number
}

class BarrasDeControl extends MecanismoDeSeguridad{
    private barrasDeControl: BarraDeControl[]
    private temperaturaAEnfriar: Temperatura

    private porcentajeDeEnfriamiento(): number

    public setTemperaturaAEnfriar(c: Temperatura): void
    public getTemperatura():number{
        return this.temperaturaAEnfriar.getTemperatura() - this.temperaturaAEnfriar.getTemperatura() * this.porcentajeDeEnfriamiento() 
    }
}

class cliente{

    public main(){
        let reactor = new Reactor();
        let barrasDeControl = new BarrasDeControl();

        barrasDeControl.setTemperaturaAEnfriar(reactor);
        barrasDeControl.getTemperatura() // Temperatura del reactor enfriado
    }
}
