import { describe, it, expect } from 'vitest';
import greet from '../src/index';

describe('greet', () => {
  it('returns greeting with provided name', () => {
    expect(greet('Micha')).toBe('hello Micha');
  });

  it('uses default name when none provided', () => {
    expect(greet()).toBe('hello world');
  });
});
