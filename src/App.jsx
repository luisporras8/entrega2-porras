import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import NotFound from './components/NotFound.jsx'

const categories = [
  { id: 'laptops', label: 'Laptops' },
  { id: 'phones', label: 'Phones' },
  { id: 'audio', label: 'Audio' },
]

const linkStyle = ({ isActive }) => ({
  padding: '6px 10px',
  borderRadius: 8,
  textDecoration: 'none',
  color: isActive ? '#0d1117' : '#e6edf3',
  background: isActive ? '#2ea043' : '#161b22',
  border: '1px solid #30363d',
})

export default function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <header style={{ padding: 16, borderBottom: '1px solid #30363d' }}>
        <h1 style={{ margin: 0 }}>Mi Tienda</h1>
        <nav style={{ display: 'flex', gap: 12, marginTop: 12, flexWrap: 'wrap' }}>
          <NavLink to="/" style={linkStyle}>Inicio</NavLink>
          {categories.map(c => (
            <NavLink key={c.id} to={`/category/${c.id}`} style={linkStyle}>{c.label}</NavLink>
          ))}
        </nav>
      </header>

      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Catálogo" />} />
          <Route path="/category/:cid" element={<ItemListContainer greeting="Categoría" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}
