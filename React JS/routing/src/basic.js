import './App.css';
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Link to="/home" >Home</Link>
      <br></br>
      <Link to="/about" >About</Link>

      <Routes>
        <Route path="/home" element={<>
          <h1>Home Page</h1>
          <p>This is my Home Page</p> </>} />
        <Route path="/about" element={<About />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is my Home Page</p>
    </div>
  )
}
function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is my About Page</p>
    </div>
  )
}


function NotFound() {
  return (
    <div>
      <h1> 404 Page</h1>
      <p>Please Enter Correct URL</p>
    </div>
  )
}
export default App;