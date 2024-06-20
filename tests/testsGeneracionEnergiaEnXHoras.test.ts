import Reactor from "../src/reactor/reactor"
import EstadoCriticidad from "../src/estados/estado-criticidad"
import EstadoCritico from "../src/estados/estado-critico"
import EstadoNormal from "../src/estados/estado-normal"

it("Tests Punto 3i",()=>{
    describe("Cantidad de energía neta producida en una determinada cantidad de horas. Considerar distintos escenarios",()=>{

        describe("En 1 hora", ()=>{
            describe("Iniciando Reactor en EstadoNormal con una temp. de 280°, genera 216.65 de energia neta",()=>{
                const energiaAGenerar = 216.65
                const reactor = new Reactor(280,0,0,0,0,new EstadoNormal())

                expect(reactor.energiaGeneradaEnXHoras(1)).toBe(energiaAGenerar);
            })
            describe("Iniciando Reactor en EstadoCriticidad con una temp. de 380°, genera x de energia neta",()=>{
                const energiaAGenerar = 700
                const reactor = new Reactor(380,0,0,0,0,new EstadoCriticidad())

                expect(reactor.energiaGeneradaEnXHoras(6)).toBe(energiaAGenerar);
            })
            describe("Iniciando Reactor en EstadoCritico con una temp. de 410°, genera x de energia neta",()=>{
                const energiaAGenerar = 700
                const reactor = new Reactor(410,0,0,0,0,new EstadoCritico())

                expect(reactor.energiaGeneradaEnXHoras(6)).toBe(energiaAGenerar);
            })
        })

        describe("En 6 horas", ()=>{
            describe("Iniciando Reactor en EstadoNormal con una temp. de 280°, genera 700 de energia neta",()=>{
                const energiaAGenerar = 700
                const reactor = new Reactor(280,0,0,0,0,new EstadoNormal())
                
                expect(reactor.energiaGeneradaEnXHoras(6)).toBe(energiaAGenerar);
            })
            describe("Iniciando Reactor en EstadoCriticidad con una temp. de 380°, genera x de energia neta",()=>{
                const energiaAGenerar = 700
                const reactor = new Reactor(380,0,0,0,0,new EstadoCriticidad())
                
                expect(reactor.energiaGeneradaEnXHoras(6)).toBe(energiaAGenerar);
            })
            describe("Iniciando Reactor en EstadoCritico con una temp. de 410°, genera x de energia neta",()=>{
                const energiaAGenerar = 700
                const reactor = new Reactor(380,0,0,0,0,new EstadoCritico())

                expect(reactor.energiaGeneradaEnXHoras(6)).toBe(energiaAGenerar);
            })
        })
    })
})