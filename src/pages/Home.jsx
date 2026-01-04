import { useState, useEffect} from "react";
import Header from "../components/Header";
import Users from "../components/Users";
import EditUserModal from "../components/EditUserModal";
import CreateNotificationForm from "../components/CreateNotificationForm";
import { fetchUsers, editUser } from "../api/users";


function Home(){
    const [notificaciones, setNotificaciones] = useState([]);
    const [countNoLeidas, setCountNoLeidas] = useState(0)
    const [userName, setuserName] = useState("")
    const [users, setUsers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleOpenModal = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };
    
    async function handleEditUser(id, data) {
        if(data.nombre === "" || data.apellido === "" || data.email === ""){
            alert("completa todos los campos")
            return
        }
        const body = JSON.stringify({
            name: data.nombre,
            lastname: data.apellido,
            email: data.email
        })

        await editUser(body, id)
    

        closeModal();
        cargarUsers();
    }

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
    
    async function guardarNotificacion(data, limpiarForm) {
        try {
            if(data.title === "" || data.description === ""){
                alert("completa todos los campos")
                return
            }
            const token = localStorage.getItem("token");
            const res = await fetch("https://back-nest-xi.vercel.app/notifications", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
            });
            if (res.ok) {
                cargarNotificaciones();
                limpiarForm();
            }

        } catch (error) {
            console.error("Error al obtener las notificaciones:", error);
        }
    }

    async function cargarUsers() {
        const data = await fetchUsers()
        setUsers(data);
    }


    useEffect(() => {
        cargarUsuario();
        cargarNotificaciones();
        cargarUsers();
    }, []);

    return(
    <div>
        <Header
        userName={userName}
        notifications={notificaciones} 
        countNoLeidas={countNoLeidas}
        cargarNotificaciones={cargarNotificaciones}
        />
        <main class="flex-1 p-6 lg:p-10 flex justify-center">
            <div class="w-full max-w-6xl space-y-8">
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="text-3xl font-bold tracking-tight">User Directory</h2>
                        <p class="text-text-sub mt-1">Manage user access and details.</p>
                    </div>
                </div>
                <Users 
                    users={users} 
                    cargarUsers={cargarUsers}
                    onEditUser={handleOpenModal}
                />
                <CreateNotificationForm 
                    guardarNotificacion={guardarNotificacion}
                />
            </div>

        </main>
            {isModalOpen && (
                <EditUserModal
                    user={selectedUser}
                    onClose={closeModal}
                    handleEditUser={handleEditUser}
                />
            )}

    </div>)
}



export default Home;