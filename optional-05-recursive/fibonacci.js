function fibonacci(n) {
  // Base case 1: Jika n adalah 0, kembalikan array berisi [0].
  if (n === 0) {
    return [0];
  }
  
  // Base case 2: Jika n adalah 1, kembalikan array berisi [0, 1].
  if (n === 1) {
    return [0, 1];
  }

  // Recursive step:
  // 1. Panggil fibonacci untuk n-1 untuk mendapatkan deret sebelumnya.
  const sequence = fibonacci(n - 1);
  
  // 2. Hitung angka berikutnya dengan menjumlahkan dua angka terakhir dari deret.
  const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
  
  // 3. Tambahkan angka baru ke dalam deret dan kembalikan.
  sequence.push(nextNumber);
  return sequence;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;