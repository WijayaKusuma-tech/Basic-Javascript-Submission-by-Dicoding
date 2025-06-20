// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Variabel untuk menampung data pesanan dalam bentuk array
let orders = [];

/**
 * Menambahkan pesanan baru ke dalam array 'orders'.
 */
function addOrder(customerName, items) {
  // Hitung total harga menggunakan reduce
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  const newOrder = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: 'Menunggu', // Status default untuk setiap pesanan baru
  };

  orders.push(newOrder);
}

/**
 * Memperbarui status pesanan berdasarkan ID.
 */
function updateOrderStatus(orderId, newStatus) {
  const orderToUpdate = orders.find((order) => order.id === orderId);

  if (orderToUpdate) {
    orderToUpdate.status = newStatus;
  }
}

/**
 * Menghitung total pendapatan dari semua pesanan yang statusnya 'Selesai'.
 */
function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === 'Selesai')
    .reduce((total, order) => total + order.totalPrice, 0);
}

/**
 * Menghapus pesanan dari array 'orders' berdasarkan ID.
 */
function deleteOrder(id) {
  orders = orders.filter((order) => order.id !== id);
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};