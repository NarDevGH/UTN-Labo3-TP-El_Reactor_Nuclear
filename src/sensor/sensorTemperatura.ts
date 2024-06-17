import EmiteTemperatura from "../types/emiteTemperatura";

export default class SensorTemperatura{
    private emisorTemperatura: EmiteTemperatura;

    constructor(emisorTemperatura: EmiteTemperatura)
    {
        this.emisorTemperatura = emisorTemperatura;
    }

    public getEmisorTemperatura():EmiteTemperatura{
        return this.emisorTemperatura;
    }

    public setEmisorTemperatura(emisorTemperatura: EmiteTemperatura): void{
        this.emisorTemperatura = emisorTemperatura;
    }

    public lecturaDeTemperatura():Number{
        return this.emisorTemperatura.getTemperatura();
    }
}