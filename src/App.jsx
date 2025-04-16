import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Category from './pages/Category'
import CategoryFood from './pages/CategoryFood'
import Cuisine from './pages/Cuisine'
import CuisineFood from './pages/CuisineFood'
import SingleFood from './pages/Recipes'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Recipes from './pages/Recipes'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category' element={<Category />} />
          <Route path='/category/:categoryName/food' element={<CategoryFood />} />
          <Route path='/cuisine' element={<Cuisine />} />
          <Route path='/cuisine/:cuisineName/food' element={<CuisineFood />} />
          <Route path='/recipes/:foodname' element={<Recipes />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
