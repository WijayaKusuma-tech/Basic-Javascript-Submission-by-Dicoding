import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { sum } from './index.js';

test('should return the correct sum of two numbers', () => {
  // Pengujian 1: Penjumlahan dua angka positif
  assert.strictEqual(sum(3, 4), 7);

  // Pengujian 2: Penjumlahan dengan angka negatif
  assert.strictEqual(sum(-5, 10), 5);

  // Pengujian 3: Penjumlahan dua angka negatif
  assert.strictEqual(sum(-2, -3), -5);

  // Pengujian 4: Penjumlahan dengan nol
  assert.strictEqual(sum(9, 0), 9);
});