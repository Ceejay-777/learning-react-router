import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'
import Sharedlayout from './pages/Sharedlayout'


function App() {
  return (
  <BrowserRouter>
    {/* <nav>Our Navbar</nav> */}
    <Routes>
      <Route path="/" element={<Sharedlayout />}>
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path='*' element={<Error />} />
      </Route>

      <Route path="dashboard" element={<div>Dashboard</div>}>
        <Route path="stats" element={<div>Stats</div>}></Route>
      </Route>
    </Routes>
    {/* <footer>Our Footer</footer> */}
  </BrowserRouter>
  )
}

export default App;
     
     