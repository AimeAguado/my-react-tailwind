export default function Users({users, cargarUsers, onEditUser}) {

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

    async function mostrarModal(id) {

  const token = localStorage.getItem("token");
  const res = await fetch(
    `https://back-nest-xi.vercel.app/users/${id}`,
    { headers: { Authorization: "Bearer " + token } }
  );

  const user = await res.json();
  onEditUser(user);
}

function cerrarModal() {
  const modal = document.getElementById("myModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}


    return (
        <div class="overflow-hidden rounded-xl border border-border-color bg-white shadow-sm">
          <div class="overflow-x-auto">
            <table class="w-full min-w-[700px]">
              <thead class="bg-gray-50 border-b border-border-color">
                  <tr>
                  <th class="px-6 py-4 text-left text-xs font-bold uppercase text-text-sub">User</th>
                  <th class="px-6 py-4 text-left text-xs font-bold uppercase text-text-sub">Email</th>
                  <th class="px-6 py-4 text-right text-xs font-bold uppercase text-text-sub">Actions</th>
                  </tr>
              </thead>
              <tbody id="aime-body" class="divide-y divide-border-color">
              {users.map(user => (
              <tr key={user._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                  <div className="flex gap-3 items-center">
                      <div className="size-9 rounded-full bg-primary font-bold flex items-center justify-center">
                      {user.name?.[0]}{user.lastname?.[0]}
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

                  <td className="px-6 py-4 text-right flex row">
                    <button
                      onClick={() => borrarUsuario(user._id)}
                      className="size-8 rounded-full border border-border-color flex items-center justify-center hover:bg-red-500 hover:text-white transition"
                      >
                      <span className="material-symbols-outlined text-[16px]">delete</span>
                    </button>
                    <button
                      onClick={() => mostrarModal(user._id)}
                      className="size-8 ml-2 rounded-full border border-border-color flex items-center justify-center hover:bg-primary hover:text-black transition"
                    >
                      <span className="material-symbols-outlined text-[16px]">edit</span>
                    </button>
                  </td>
              </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
    );
}
