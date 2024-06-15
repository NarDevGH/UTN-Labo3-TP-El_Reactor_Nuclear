// Principio de Responsabilidad Única: Separamos las responsabilidades en diferentes clases.
// Principio de Abierto/Cerrado: Usamos interfaces y clases abstractas para permitir extensiones
// futuras.
// Principio de Sustitución de Liskov: Las clases derivadas deben ser intercambiables por sus
// clases base.
// Principio de Segregación de Interfaces: Creamos interfaces específicas para cada necesidad.
// Principio de Inversión de Dependencias: Dependemos de abstracciones, no de implementaciones 
//concretas.

// Patrón Observador: Para notificar cambios de estado.
// Patrón Estrategia: Para cambiar la estrategia de enfriamiento.
// Patrón Comando: Para encapsular acciones de control del reactor.

//Podríamos agregar un Patrón Factory Method
/*class ReactorFactory {
    public static createReactor(): Reactor {
    ...
    }
  } Pero aun no vi bien si es un buen uso o solo serviria para incluir un patron sin sentido

  //gggggg