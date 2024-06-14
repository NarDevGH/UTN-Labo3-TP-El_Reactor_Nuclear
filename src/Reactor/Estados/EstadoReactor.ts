import Reactor from "../reactor";

export default abstract class EstadoReactor {
    protected temperatura!: number;

    protected abstract energiaModificadaPorEstado(energia :number) :number;
    abstract manejarCambioTemperatura(reactor: Reactor): void;

    public setTemperatuar(n: number): void {
        this.temperatura = n;
    }

    public getTemperatura(): number {
        return this.temperatura;
    }

    public energiaGenerada(){
        // Calculamos la pendiente (m) y el intercepto (b) para la energía termal
        const mTermal = (2500.02 - 2100.0) / (329.98 - 280.00);
        const bTermal = 2100.0 - mTermal * 280.00;
    
        // Calculamos la pendiente (m) y el intercepto (b) para la energía neta
        const mNeta = (700.00 - 100.00) / (329.98 - 280.00);
        const bNeta = 100.00 - mNeta * 280.00;
    
        // Usamos las ecuaciones lineales para calcular la energía termal y neta
        const energiaTermal = mTermal * this.temperatura + bTermal;
        const energiaNeta = mNeta * this.temperatura + bNeta;

        // Aplicar modificacion en la produccion de energia por estado
        const energiaTermalRes = this.energiaModificadaPorEstado(energiaTermal);
        const energiaNetaRes = this.energiaModificadaPorEstado(energiaNeta);

        return { termal: energiaTermalRes, neta: energiaNetaRes };
    }
}
