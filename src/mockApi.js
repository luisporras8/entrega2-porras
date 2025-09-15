const PRODUCTS = [
  { id: 'p1', title: 'Laptop Pro 14', price: 1200, category: 'laptops', stock: 8, img: 'https://via.placeholder.com/640x400?text=Laptop+Pro+14' },
  { id: 'p2', title: 'Laptop Air 13', price: 900, category: 'laptops', stock: 12, img: 'https://via.placeholder.com/640x400?text=Laptop+Air+13' },
  { id: 'p3', title: 'Phone X', price: 700, category: 'phones', stock: 20, img: 'https://via.placeholder.com/640x400?text=Phone+X' },
  { id: 'p4', title: 'Phone Mini', price: 500, category: 'phones', stock: 15, img: 'https://via.placeholder.com/640x400?text=Phone+Mini' },
  { id: 'p5', title: 'Headset Studio', price: 250, category: 'audio', stock: 25, img: 'https://via.placeholder.com/640x400?text=Headset+Studio' },
]

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export async function getProducts() { await delay(500); return PRODUCTS }
export async function getProductsByCategory(cid) { await delay(500); return PRODUCTS.filter(p => p.category === cid) }
export async function getProductById(id) { await delay(500); return PRODUCTS.find(p => p.id === id) }
