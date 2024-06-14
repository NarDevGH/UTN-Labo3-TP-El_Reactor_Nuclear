import Reactor from "../reactor";

export default abstract class EstadoReactor {
    protected temperatura!: number;

    abstract manejarCambioTemperatura(reactor: Reactor): void;

    public setTemperatuar(n: number): void {
        this.temperatura = n;
    }

    public getTemperatura(): number {
        return this.temperatura;
    }
}
