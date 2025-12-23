import { useEffect, useState } from "react";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        cargarUsers();
    }, []);

    async function cargarUsers() {
        const token = localStorage.getItem("token");

        const res = await fetch("https://back-nest-xi.vercel.app/users", {
        headers: { Authorization: "Bearer " + token },
        });

        const data = await res.json();
        setUsers(data);
    }

    async function borrarUsuario(id) {
        const token = localStorage.getItem("token");

        await fetch(
        `https://back-nest-xi.vercel.app/users/${id}`,
        {
            method: "DELETE",
            headers: { Authorization: "Bearer " + token },
        }
        );
    

        cargarUsers();
    }

    return (
        <table className="w-full">
        <tbody>
            {users.map(user => (
            <tr key={user._id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                <div className="flex gap-3 items-center">
                    <div className="size-9 rounded-full bg-primary font-bold flex items-center justify-center">
                    {user.name[0]}{user.lastname[0]}
                    </div>
                    <div>
                    <p className="font-bold text-sm">
                        {user.name} {user.lastname}
                    </p>
                    <p className="text-xs text-text-sub">User</p>
                    </div>
                </div>
                </td>

                <td className="px-6 py-4 text-sm text-text-sub">
                {user.email}
                </td>

                <td className="px-6 py-4 text-right">
                <button
                    onClick={() => borrarUsuario(user._id)}
                    className="size-8 rounded-full hover:bg-red-500 hover:text-white">
                        eliminar
                </button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    );
}
