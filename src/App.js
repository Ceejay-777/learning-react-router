import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'
import Sharedlayout from './pages/Sharedlayout'
import SingleProduct from './pages/SingleProduct'
import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import ProtectedRoute from './pages/ProtectedRoute'
import SharedProduct from './components/SharedProduct'


function App() {
  const [user, setUser] = useState(null)

  return (
  <BrowserRouter>
    {/* <nav>Our Navbar</nav> */}
    <Routes>
      <Route path="/" element={<Sharedlayout />}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About />} />
        
        <Route path="products" element={<SharedProduct />}>
          <Route index element={<Products />} />
          <Route path="products/:productID" element={<SingleProduct />} />
        </Route>

        <Route path='login' element={<Login setUser={setUser}/>} />
        <Route path='dashboard' element={
          <ProtectedRoute user={user}>
           <Dashboard user={user}/>
        </ProtectedRoute>
       } />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
    {/* <footer>Our Footer</footer> */}
  </BrowserRouter>
  )
}

export default App;
     
     