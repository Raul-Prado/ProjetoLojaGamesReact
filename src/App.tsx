import React from 'react'
import Navbar from './componentes/Navbar/Navbar'
import { Footer } from './componentes/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Produtos from './pages/Produtos/Produtos'
import CardCategorias from './componentes/Categorias/CardCategorias/CardCategorias'
import ListaCategorias from './componentes/Categorias/ListarCategorias/ListarCategorias'
import FormularioCategoria from './componentes/Categorias/EditarCategorias/EditarCategorias'
import DeletarCategoria from './componentes/Categorias/DeletarCategorias/DeletarCategorias'

function App() {
  return(
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<ListaCategorias />} />
        <Route path='/editarcategoria/:id' element={<FormularioCategoria />} />
        <Route path='/cadastrarcategoria' element={<FormularioCategoria />} />
        <Route path='/deletarcategoria/:id' element={<DeletarCategoria />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App