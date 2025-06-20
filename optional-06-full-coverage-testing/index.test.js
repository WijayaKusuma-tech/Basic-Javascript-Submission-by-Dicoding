import { test, describe } from 'node:test';
import { strict as assert } from 'node:assert';
import sum from './index.js';

describe('Full Coverage Test for sum function', () => {
  // Skenario 1: Pengujian untuk input angka non-negatif yang valid (jalur eksekusi utama)
  test('should return the correct sum for valid non-negative numbers', () => {
    assert.strictEqual(sum(5, 10), 15, 'Test 1.1: 5 + 10 should be 15');
    assert.strictEqual(sum(100, 0), 100, 'Test 1.2: 100 + 0 should be 100');
    assert.strictEqual(sum(3.5, 6.5), 10, 'Test 1.3: 3.5 + 6.5 should be 10');
  });

  // Skenario 2: Pengujian untuk input yang bukan angka (mencakup if pertama)
  test('should return 0 if any argument is not a number', () => {
    assert.strictEqual(sum('5', 10), 0, 'Test 2.1: First argument is a string');
    assert.strictEqual(sum(5, '10'), 0, 'Test 2.2: Second argument is a string');
    assert.strictEqual(sum(null, 10), 0, 'Test 2.3: First argument is null');
    assert.strictEqual(sum(5, undefined), 0, 'Test 2.4: Second argument is undefined');
    assert.strictEqual(sum({}, []), 0, 'Test 2.5: Both arguments are non-numbers');
  });

  // Skenario 3: Pengujian untuk input angka negatif (mencakup if kedua)
  test('should return 0 if any argument is a negative number', () => {
    assert.strictEqual(sum(-5, 10), 0, 'Test 3.1: First argument is negative');
    assert.strictEqual(sum(5, -10), 0, 'Test 3.2: Second argument is negative');
    assert.strictEqual(sum(-5, -10), 0, 'Test 3.3: Both arguments are negative');
  });
});