import './App.css';
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
