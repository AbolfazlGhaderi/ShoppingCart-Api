import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import { CartProvider } from './context/CartContext'

import Navbar from './components/Navbar'
import Shop from './pages/Shop'
import Success from './pages/Success'

function App() {
  return (
    <CartProvider>
      <Container>
        <Navbar></Navbar>
        <Routes>
          <Route index element={<Shop />} />
          <Route path='/success' element={<Success />} />
        </Routes>
      </Container>
    </CartProvider>
  )
}

export default App
