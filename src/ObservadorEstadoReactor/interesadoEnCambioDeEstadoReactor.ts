import InteresesEstadoReactor from "../types/interesesEstadoReactor";

export default interface InteresadoEnCambioDeEstadoReactor {
    estaInteresadoEnEstado(interes: InteresesEstadoReactor): boolean;
    añadirInteresEnEstadoReactor(interes: InteresesEstadoReactor): void
    sacarInteresEnEstadoReactor(interes: InteresesEstadoReactor): void
}
