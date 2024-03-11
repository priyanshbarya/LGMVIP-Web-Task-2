import React from 'react';
import Home from "./routes/Home.jsx";
import { Route, Routes } from "react-router-dom";
import Users from './routes/Users.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
