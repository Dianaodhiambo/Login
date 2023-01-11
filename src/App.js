// import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';


function App() {
const [user, setUser] = useState(null) 
  return (
    <div>
    <Routes>
        <Route path = '/login' element={<Login setUser={setUser} />}/>
        <Route exact path = '/' element={<Home/>}/>
        {/* other components */}
    </Routes>
    </div>
  );
}

export default App;
