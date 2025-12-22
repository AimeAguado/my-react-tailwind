import './App.css'
import Login from "./components/Login";
import { useState } from "react";
import Register from './components/Register';

function App() {
    const [showRegister, setShowRegister] = useState(false);

    return (
        <div>
            {showRegister ? (
                <Register goToLogin={setShowRegister} /> 
            ) : (
                <Login goToRegister={setShowRegister} />
            )}
        </div>
)
}

export default App
