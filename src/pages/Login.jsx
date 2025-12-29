import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

function Login({goToRegister}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()


    async function login() {
        if (!email || !password) return alert("Completa los campos");

        const res = await fetch("https://back-nest-xi.vercel.app/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        await localStorage.setItem("user", JSON.stringify(data.user));
        await localStorage.setItem("token", data.access_token);
        navigate("/home")
    }

    function goToRegister(){
        navigate("/register")
    }

    return (
            <div id="loginForm" className="max-w-sm rounded-xl overflow-hidden shadow-lg py-8 mx-auto mt-10 px-8">
                <h1 className="font-bold text-2xl mt-4 mb-6 text-center">
                    Login to your account
                </h1>
                <div class="mt-2">
                    <label className="text-gray-500 mb-2" htmlFor="email">Email </label>
                    <input className="border border-gray-300 flex p-1 rounded w-full " onChange={(e)=> setEmail(e.target.value)} type="text" />
                </div>
                <div id="loginForm" className="mt-2">
                    <label className="text-gray-500 mb-2" htmlfor="password"> Password </label>
                    <input className="border border-gray-300 flex p-1 rounded w-full " onChange={(e)=> setPassword(e.target.value)} type="password" />
                </div>
                <p className="text-blue-500 cursor-pointer text-right text-sm mt-2"> forgot password?</p>
                <button onClick={() => login()} class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 w-full my-6 rounded">
                    Log in
                </button>
                <p className="text-center text-gray-500 text-sm">Don't have an account? <span onClick={()=> goToRegister()} className="text-blue-500 cursor-pointer">Sign up</span></p>
            </div>
    );
}

export default Login;
