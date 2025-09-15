import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../mockApi'

const grid = {
  listStyle: 'none',
  padding: 0,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
  gap: 16,
}

const card = {
  background: '#161b22',
  border: '1px solid #30363d',
  borderRadius: 16,
  padding: 12,
}

const btn = {
  display: 'inline-block',
  marginTop: 8,
  padding: '8px 12px',
  background: '#2ea043',
  color: '#0d1117',
  textDecoration: 'none',
  borderRadius: 10,
  fontWeight: 600,
}

export default function ItemListContainer({ greeting }) {
  const { cid } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const task = cid ? getProductsByCategory(cid) : getProducts()
    task.then(setItems).finally(() => setLoading(false))
  }, [cid])

  if (loading) return <p>Cargando productos…</p>

  return (
    <section>
      <h2 style={{ marginTop: 0 }}>{greeting}{cid ? ` – ${cid}` : ''}</h2>
      {items.length === 0 ? (
        <p>No hay productos en esta categoría.</p>
      ) : (
        <ul style={grid}>
          {items.map((it) => (
            <li key={it.id} style={card}>
              <img src={it.img} alt={it.title} style={{ width: '100%', borderRadius: 12 }} />
              <h3>{it.title}</h3>
              <p style={{ margin: '8px 0' }}>$ {it.price}</p>
              <Link to={`/item/${it.id}`} style={btn}>Ver detalle</Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
