function factorial(n) {
  // Base case: Jika n adalah 0 atau 1, faktorialnya adalah 1.
  if (n === 0 || n === 1) {
    return 1;
  }
  
  // Recursive step: n dikalikan dengan faktorial dari (n - 1).
  return n * factorial(n - 1);
}

// Jangan hapus kode di bawah ini!
export default factorial;