import './App.css'
import Login from "./pages/Login";
import { useState } from "react";
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';

function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </>
)
}

export default App
