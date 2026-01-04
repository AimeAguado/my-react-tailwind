import { useEffect, useState} from "react";


const EditUserModal = ({ user, onClose, handleEditUser }) => {
    const [nombre, setName] = useState("");
    const [apellido, setSurname] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (user) {
            setName(user?.name)
            setSurname(user?.lastname)
            setEmail(user?.email)
        }
    }, [user]);
    console.log(user)
  if (!user) return null;

  return (
    <div style={overlay}>
      <div style={modal}>
            <div className="rounded-xl overflow-hidden shadow-lg py-8 mx-auto mt-10 px-8">
                <h1 className="font-bold text-2xl mt-4 mb-6 text-center">Editar usuario</h1>
                <div className="mt-2">
                    <label className="text-gray-500 mb-2" htmlFor="">Nombre</label>
                    <input id="nombre" value={nombre} type="text" onChange={(e)=> setName(e.target.value)} className="border border-gray-300 flex p-1 rounded w-full " />
                </div>
                <div className="mt-2">
                    <label className="text-gray-500 mb-2" htmlFor="">Apellido</label>
                    <input id="apellido" value={apellido} type="text" onChange={(e)=> setSurname(e.target.value)} className="border border-gray-300 flex p-1 rounded w-full "/>
                </div>
                <div className="mt-2">
                    <label className="text-gray-500 mb-2" htmlFor="email">Email </label>
                    <input id="register-email" value={email} type="text" onChange={(e)=> setEmail(e.target.value)} className="border border-gray-300 flex p-1 rounded w-full " />
                </div>
                <button onClick={()=>handleEditUser(user._id,{nombre, apellido, email})} className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 w-full my-6 rounded"> Guardar </button>
                <button onClick={()=>onClose()} className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 w-full my-6 rounded"> Cancelar </button>
            </div>
      </div>
    </div>
  );
};

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modal = {
  background: "white",
  padding: "20px",
  borderRadius: "8px",
  minWidth: "300px",
};

export default EditUserModal;
