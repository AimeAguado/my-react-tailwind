import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

function Register() {
    const [countries, setCountries] = useState([]);  
    const [countryCode, setCountryCode] = useState("");  
    const [nombre, setName] = useState("");
    const [apellido, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        cargarPaises();
    }, []);

    async function cargarPaises() {
        const res = await fetch("https://back-nest-xi.vercel.app/countries");
        const data = await res.json();
        setCountries(data);
    }

    async function handleRegister() {
  if (!nombre || !apellido || !email || !password) {
    alert("Completa todos los campos");
    return;
  }

  try {
    const res = await fetch("https://back-nest-xi.vercel.app/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nombre,
        apellido,
        email,
        password,
        countryCode
      })
    });

    const data = await res.json();

    console.log("Response OK:", res.ok);
    console.log("Response data:", data);

    if (!res.ok) {
      alert(data.message || "Error al registrar");
      return;
    }

    alert("Registro exitoso");
    await localStorage.setItem("user", JSON.stringify(data.user));
    await localStorage.setItem("token", data.access_token)
    navigate("/home")
  } catch (error) {
    console.error("Error catch:", error);
    alert("Error del servidor");
  }
}

function goToLogin(){
  navigate("/")
}

    return (
            <div id="registerForm" className="max-w-sm rounded-xl overflow-hidden shadow-lg py-8 mx-auto mt-10 px-8">
                <h1 className="font-bold text-2xl mt-4 mb-6 text-center">Register</h1>
                <div className="mt-2">
                    <label className="text-gray-500 mb-2" htmlFor="">Nombre</label>
                    <input id="nombre" type="text" onChange={(e)=> setName(e.target.value)} className="border border-gray-300 flex p-1 rounded w-full " />
                </div>
                <div className="mt-2">
                    <label className="text-gray-500 mb-2" htmlFor="">Apellido</label>
                    <input id="apellido" type="text" onChange={(e)=> setSurname(e.target.value)} className="border border-gray-300 flex p-1 rounded w-full "/>
                </div>
                <div className="mt-2">
                    <label className="text-gray-500 mb-2" htmlFor="country">Pais</label>
                    <div>
                    <select onChange={(e)=>setCountryCode(e.target.value)} className="border w-full p-1 mt-2">
                        {countries.map(p => <option key={p.code} value={p.code}>{p.name}</option>)}
                    </select>                   
                    </div>
                </div>
                <div className="mt-2">
                    <label className="text-gray-500 mb-2" htmlFor="email">Email </label>
                    <input id="register-email" type="text" onChange={(e)=> setEmail(e.target.value)} className="border border-gray-300 flex p-1 rounded w-full " />
                </div>
                <div id="loginForm" className="mt-2">
                    <label className="text-gray-500 mb-2" htmlFor="password"> Password </label>
                    <input id="register-password" type="password" onChange={(e)=> setPassword(e.target.value)} className="border border-gray-300 flex p-1 rounded w-full "/>
                </div>
                <button onClick={()=>handleRegister()} className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 w-full my-6 rounded"> Register </button>
                <button onClick={()=>goToLogin()} className="text-blue-500 mt-4">
                    Volver al login
                </button>
            </div>
    );
}

export default Register;
