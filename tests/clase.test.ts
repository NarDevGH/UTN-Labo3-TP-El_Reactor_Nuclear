import { Reactor, estadoNormal, estadoCriticidad, estadoCritico, Operario, Directivo } from './Reactor';

// Mocks para los observadores y estados
jest.mock('./Reactor', () => {
  return {
    Operario: jest.fn().mockImplementation(() => {
      return {update: jest.fn()};
    }),
    Directivo: jest.fn().mockImplementation(() => {
      return {update: jest.fn()};
    }),
    estadoNormal: jest.fn().mockImplementation(() => {
      return {manejaCambioTemperatura: jest.fn()};
    }),
    estadoCriticidad: jest.fn().mockImplementation(() => {
      return {manejaCambioTemperatura: jest.fn()};
    }),
    estadoCritico: jest.fn().mockImplementation(() => {
      return {manejaCambioTemperatura: jest.fn()};
    })
  };
});

describe('Reactor', () => {
  let reactor: Reactor;
  let operarioMock: Operario;
  let directivoMock: Directivo;

  beforeEach(() => {
    // Instanciación de los mocks
    operarioMock = new Operario();
    directivoMock = new Directivo();
    reactor = new Reactor();
    reactor.addObservadorOperario(operarioMock);
    reactor.addObservadorDirectivo(directivoMock);
  });
