import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../mockApi'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getProductById(id).then(setItem).finally(() => setLoading(false))
  }, [id])

  if (loading) return <p>Cargando detalle…</p>
  if (!item) return <p>Producto no encontrado.</p>
  return <ItemDetail item={item} />
}
