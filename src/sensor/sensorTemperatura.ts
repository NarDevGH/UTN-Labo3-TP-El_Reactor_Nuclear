import EmiteTemperatura from "../types/emiteTemperatura";

export default class SensorTemperatura{
    private emisorTemperatura: null|EmiteTemperatura;

    constructor(emisorTemperatura?: EmiteTemperatura)
    {
        if(emisorTemperatura){
            this.emisorTemperatura = emisorTemperatura;
        }
        else{
            this.emisorTemperatura = null;
        }
    }

    public getEmisorTemperatura():EmiteTemperatura|EmisorDeTemperaturaNoSeteado{
        if(this.emisorTemperatura){
            return this.emisorTemperatura;
        }
        else{
            throw new EmisorDeTemperaturaNoSeteado();
        }
    }

    public setEmisorTemperatura(emisorTemperatura: EmiteTemperatura): void{
        this.emisorTemperatura = emisorTemperatura;
    }

    public lecturaDeTemperatura():Number|EmisorDeTemperaturaNoSeteado{
        if(this.emisorTemperatura){
            return this.emisorTemperatura.getTemperatura();
        }
        else{
            throw new EmisorDeTemperaturaNoSeteado();
        }
    }
}

export class EmisorDeTemperaturaNoSeteado extends Error{
    constructor() {
        super("No se encuentra seteado el emisor de temperatura en la clase");
        this.name = "Error_Lectura_EmisorDeTemperatura_No_Seteado";
    }
}