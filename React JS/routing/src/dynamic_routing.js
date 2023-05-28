import './App.css';
import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import User from "./dynamic_User";

function App() {

  const students = [
    { name: "Sumit", email: "abc@gmail.com", id: 1 },
    { name: "Saurabh", email: "xyz@gmail.com", id: 2 },
    { name: "Aditya", email: "pqr@gmail.com", id: 3 },
    { name: "Tejas", email: "tejas@gmail.com", id: 5 },
    { name: "Yash", email: "lmm@gmail.com", id: 5 },
]

  return (
    <div className="App">
      <BrowserRouter>
        <h2>React Dynamic Routing </h2>

        {
          students.map((item) =>
            <div>
              <Link to={"/user/" + item.id} >{item.name}</Link>
            </div>
          )
        }

        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path={"user/:id"} element={<User />} />
          
        </Routes>
      </BrowserRouter>
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
export default App;