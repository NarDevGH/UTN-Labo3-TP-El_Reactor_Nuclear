import Reactor from "../src/reactor/reactor"
import EstadoNormal from "../src/estados/estado-normal"

describe("Cantidad de energía neta producida en una determinada cantidad de horas. Considerar distintos escenarios",()=>{
    it("Iniciando Reactor en EstadoNormal con una temp. de 280°, en 1 hora, genera 216.65 de energia neta",()=>{
        const reactor = new Reactor(280,0,0,0,0,new EstadoNormal())
        let energiaGenerada = reactor.energiaGeneradaEnXHoras(1);
        energiaGenerada = Math.floor(energiaGenerada);

        let energiaAGenerar = 299
        
        expect(energiaGenerada).toBe(energiaAGenerar);
    })
    it("Iniciando Reactor en EstadoNormal con una temp. de 280°, en 6 hora, genera 700 de energia neta",()=>{
        const reactor = new Reactor(280,0,0,0,0,new EstadoNormal())
        let energiaGenerada = reactor.energiaGeneradaEnXHoras(6);
        energiaGenerada = Math.floor(energiaGenerada);

        const energiaAGenerar = 2799
        
        expect(energiaGenerada).toBe(energiaAGenerar);
    })
    it("Iniciando Reactor en EstadoNormal con una temp. de 280°, en 14 hora, genera 11198 de energia neta",()=>{
        const reactor = new Reactor(280,0,0,0,0,new EstadoNormal())
        let energiaGenerada = reactor.energiaGeneradaEnXHoras(15);
        energiaGenerada = Math.floor(energiaGenerada);

        const energiaAGenerar = 3446 
        
        expect(energiaGenerada).toBe(energiaAGenerar);
    })
})