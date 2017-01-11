import { describe, it } from 'mocha';
import expect from 'expect';
import pow from '~/pow';

describe('pow()', () => {
  it('should return a number', () => {
    expect(pow(1, 2)).toBeA('number');
  });

  it("should throw when arguments aren't numbers", () => {
    expect(() => {
      pow('(*!)', '123');
    }).toThrow();

    expect(() => {
      pow('123', '(*!)');
    }).toThrow();
  });

  it('should return 1 when power is zero', () => {
    expect(pow(1, 0)).toBe(1);
    expect(pow(0, 0)).toBe(1);
    expect(pow(-1, 0)).toBe(1);
  });

  it('should return the own number when power is one', () => {
    expect(pow(0, 1)).toBe(0);
    expect(pow(-1, 1)).toBe(-1);
    expect(pow(1, 1)).toBe(1);
  });

  it('should return the number multiplied by itself `power` times', () => {
    expect(pow(10, 2)).toBe(100);
    expect(pow(20, 2)).toBe(400);
  });
});
