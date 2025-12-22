import { useEffect, useState } from "react";

function Register({goToLogin}) {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        cargarPaises();
    }, []);

    async function cargarPaises() {
        const res = await fetch("https://back-nest-xi.vercel.app/countries");
        const data = await res.json();
        setCountries(data);
    }
    function handleRegister(){

    }
    return (
            <div id="registerForm" className="max-w-sm rounded-xl overflow-hidden shadow-lg py-8 mx-auto mt-10 px-8">
                <h1 className="font-bold text-2xl mt-4 mb-6 text-center">Register</h1>
                <div className="mt-2">
                    <label className="text-gray-500 mb-2" htmlFor="">Nombre</label>
                    <input id="nombre" type="text" className="border border-gray-300 flex p-1 rounded w-full " />
                </div>
                <div className="mt-2">
                    <label className="text-gray-500 mb-2" htmlFor="">Apellido</label>
                    <input id="apellido" type="text" className="border border-gray-300 flex p-1 rounded w-full "/>
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
                    <input id="register-email" type="text" className="border border-gray-300 flex p-1 rounded w-full " />
                </div>
                <div id="loginForm" className="mt-2">
                    <label className="text-gray-500 mb-2" htmlor="password"> Password </label>
                    <input id="register-password" type="password" className="border border-gray-300 flex p-1 rounded w-full "/>
                </div>
                <button onClick={()=>handleRegister()} className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 w-full my-6 rounded"> Register </button>
                <button onClick={()=>goToLogin(false)} className="text-blue-500 mt-4">
                    Volver al login
                </button>
            </div>
    );
}

export default Register;
