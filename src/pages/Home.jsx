import { useState, useEffect} from "react";
import Header from "../components/Header";


function Home(){
    const [notificaciones, setNotificaciones] = useState([]);
    const [countNoLeidas, setCountNoLeidas] = useState(0)
    const [userName, setuserName] = useState("")

    useEffect(() => {
        cargarUsuario();
        cargarNotificaciones();
    }, []);
    
    async function cargarUsuario(){
        const user = JSON.parse(localStorage.getItem("user"));
        setuserName(user.name)
    }

    async function cargarNotificaciones() {
        const token = localStorage.getItem("token");

        const res = await fetch(
        "https://back-nest-xi.vercel.app/notifications",
        { headers: { Authorization: "Bearer " + token } }
        );

        const data = await res.json();
        const cantidadNoLeida = data.filter(n => !n.read).length
        setCountNoLeidas(cantidadNoLeida);
        setNotificaciones(data);
    }
    return(
    <div>
        <Header
        userName={userName}
        notifications={notificaciones} 
        countNoLeidas={countNoLeidas}
        cargarNotificaciones={cargarNotificaciones}
        />
        <h1>
            Home
        </h1>
    </div>)
}



export default Home;