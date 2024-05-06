import React from 'react'
import Navbar from './componentes/Navbar/Navbar'
import { Footer } from './componentes/Footer/Footer'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Categorias from './pages/Categorias/Categorias'
import Produtos from './pages/Produtos/Produtos'
import Cadastrar from './pages/Cadastrar/Cadastrar'

function App() {
  return(
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/categorias' element={<Categorias />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/cadastrarprodutos' element={<Cadastrar />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App