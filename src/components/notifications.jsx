import { useEffect, useState } from "react";

export default function Notifications() {
    const [notificaciones, setNotificaciones] = useState([]);

    useEffect(() => {
        cargarNotificaciones();
    }, []);

    async function cargarNotificaciones() {
        const token = localStorage.getItem("token");

        const res = await fetch(
        "https://back-nest-xi.vercel.app/notifications",
        { headers: { Authorization: "Bearer " + token } }
        );

        const data = await res.json();
        setNotificaciones(data);
    }

    async function marcarLeida(id) {
        const token = localStorage.getItem("token");

        await fetch(
        `https://back-nest-xi.vercel.app/notifications/${id}/read`,
        {
            method: "PATCH",
            headers: { Authorization: "Bearer " + token },
        }
        );

        cargarNotificaciones();
    }

    async function eliminar(id) {
        const token = localStorage.getItem("token");

        await fetch(
        `https://back-nest-xi.vercel.app/notifications/${id}`,
        {
            method: "DELETE",
            headers: { Authorization: "Bearer " + token },
        }
        );

        cargarNotificaciones();
    }

    return (
        <ul className="divide-y">
        {notificaciones.map(n => (
            <li key={n._id} className="p-4 flex gap-3">
            <div className="flex-1">
                <p className="font-medium">{n.title}</p>
                <p className="text-xs text-text-sub">{n.description}</p>

                <div className="flex gap-2 mt-2">
                {!n.read && (
                    <button
                    onClick={() => marcarLeida(n._id)}
                    className="px-3 py-1 text-xs bg-primary rounded-full"
                    >
                    Read
                    </button>
                )}

                <button
                    onClick={() => eliminar(n._id)}
                    className="px-3 py-1 text-xs bg-gray-200 rounded-full"
                >
                    Delete
                </button>
                </div>
            </div>
            </li>
        ))}
        </ul>
    );
}
