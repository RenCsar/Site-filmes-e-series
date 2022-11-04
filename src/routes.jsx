import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pages/Home'
import Sugestao from './pages/Sugestao'
import PaginaPadrao from './components/PaginaPadrao'
import TopFilmes from 'pages/TopFilmes'
import TopSeries from 'pages/TopSeries'
import Conteudo from 'components/Conteudo'
import Footer from 'components/Footer'

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route path="/" element={<Home />} />
            <Route path="/Sugestao" element={<Sugestao />} />
          </Route>
          <Route path="/" element={<Conteudo />}>
            <Route path="/TopFilmes" element={<TopFilmes />} />
            <Route path="/TopSeries" element={<TopSeries />} />
          </Route>

          <Route
            path="*"
            element={<div>Erro 404 - Página não encontrada</div>}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default AppRoutes
