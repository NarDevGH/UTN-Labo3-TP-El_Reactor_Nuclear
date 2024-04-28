import Operations from '../src/operations';

describe('Operations', () => {
  let instance: Operations;

  beforeEach(() => {
    instance = new Operations();
  });

  it('instance should be an instanceof Operations', () => {
    expect(instance instanceof Operations).toBeTruthy();
  });

  it('should have a method sum()', () => {
    const result = instance.sum(1,2);
    expect(result).toBe(3);
  });
});