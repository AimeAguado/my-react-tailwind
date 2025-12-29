export default function Notifications({notifications, cargarNotificaciones }) {

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
    {notifications.map((n) => (
      <li
        key={n._id}
        className="p-4 border-b border-border-color
                   hover:bg-gray-50 transition-colors"
      >
        <div className="flex gap-3">
          {/* Icono */}
          <div className="size-8 rounded-full bg-blue-100
                          text-blue-600
                          flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[18px]">
              info
            </span>
          </div>

          {/* Contenido */}
          <div className="flex-1 space-y-2">
            <p className="text-sm font-medium text-text-main leading-tight">
              {n.title}
            </p>

            <p className="text-xs text-text-sub">
              {n.description}
            </p>

            {/* Acciones */}
            <div className="flex gap-2 pt-1">
              {!n.read && (
                <button
                  onClick={() => marcarLeida(n._id)}
                  className="text-[10px] font-bold uppercase tracking-wide
                             px-3 py-1 rounded-full
                             bg-primary text-black
                             hover:bg-yellow-400 transition-colors"
                >
                  Read
                </button>
              )}

              <button
                onClick={() => eliminar(n._id)}
                className="text-[10px] font-bold uppercase tracking-wide
                           px-3 py-1 rounded-full
                           bg-gray-100
                           text-text-sub
                           hover:bg-gray-200 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </li>
    ))}
  </ul>
);

}
