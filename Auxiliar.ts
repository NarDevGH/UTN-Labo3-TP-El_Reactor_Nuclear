// Principio de Responsabilidad Única: Separación de clases y responsabilidades
interface IThermalEnergyCalculator {
    calculate(currentTemperature: number): { thermal: number; net: number };
  }
  
  class ThermalEnergyCalculator implements IThermalEnergyCalculator {
    private static readonly ENERGY_TABLE = new Map<number, { thermal: number; net: number }>([
      // ... tabla de energía ...
    ]);
  
    public calculate(currentTemperature: number): { thermal: number; net: number } {
      // ... lógica de cálculo ...
    }
  }
  
  // Principio de Abierto/Cerrado: Extensibilidad sin modificar el código existente
  interface ICoolingProtocol {
    activate(): void;
  }
  
  class ControlRodCoolingProtocol implements ICoolingProtocol {
    public activate(): void {
      // ... lógica de activación ...
    }
  }
  
  // Principio de Sustitución de Liskov: Uso de interfaces para permitir sustituciones
  class Reactor {
    private temperature: number;
    private coolingProtocol: ICoolingProtocol;
    private energyCalculator: IThermalEnergyCalculator;
  
    constructor(coolingProtocol: ICoolingProtocol, energyCalculator: IThermalEnergyCalculator) {
      this.temperature = 0;
      this.coolingProtocol = coolingProtocol;
      this.energyCalculator = energyCalculator;
    }
  
    public updateTemperature(newTemperature: number): void {
      this.temperature = newTemperature;
      // ... lógica de actualización ...
    }
  
    // ... más métodos ...
  }
  
  // Principio de Inversión de Dependencias: Dependencia en abstracciones, no en concreciones
  class ReactorControlSystem {
    private reactor: Reactor;
  
    constructor(reactor: Reactor) {
      this.reactor = reactor;
    }
  
    public monitorReactor(): void {
      // ... lógica de monitoreo ...
    }
  }
  
  // Patrón de diseño: Factory Method
  class ReactorFactory {
    public static createReactor(): Reactor {
      const coolingProtocol = new ControlRodCoolingProtocol();
      const energyCalculator = new ThermalEnergyCalculator();
      return new Reactor(coolingProtocol, energyCalculator);
    }
  }
  
  // Uso del sistema
  const reactor = ReactorFactory.createReactor();
  const controlSystem = new ReactorControlSystem(reactor);
  controlSystem.monitorReactor();
