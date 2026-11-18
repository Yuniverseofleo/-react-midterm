import { describe, it, expect } from 'vitest';
import { add } from './calculator';

describe('Calculator', () => {
  it('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('adds negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  it('adds numeric strings', () => {
    expect(add('2', '3')).toBe(5);
  });
});