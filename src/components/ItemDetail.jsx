import { useState } from 'react'

function ItemCount({ stock = 10, onAdd }) {
  const [qty, setQty] = useState(1)
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <button onClick={() => setQty(q => Math.max(1, q-1))}>-</button>
      <span>{qty}</span>
      <button onClick={() => setQty(q => Math.min(stock, q+1))}>+</button>
      <button onClick={() => onAdd?.(qty)}>Agregar</button>
    </div>
  )
}

export default function ItemDetail({ item }) {
  const handleAdd = (qty) => alert(`Agregado ${qty} al carrito`)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      <img src={item.img} alt={item.title} style={{ width: '100%', borderRadius: 12 }} />
      <div>
        <h2>{item.title}</h2>
        <p style={{ fontSize: 18 }}>Precio: $ {item.price}</p>
        <p>Stock: {item.stock}</p>
        <ItemCount stock={item.stock} onAdd={handleAdd} />
      </div>
    </div>
  )
}
