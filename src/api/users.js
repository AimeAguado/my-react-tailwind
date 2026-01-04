    const apiUrl = import.meta.env.VITE_API_URL;

export async function fetchUsers() {
    const token = await localStorage.getItem("token");

    const res = await fetch(`${apiUrl}/users`, {
        headers: { Authorization: "Bearer " + token },
        
    });

    const data = await res.json();

    return data
}        

export async function editUser(body , id) {
    
    const token = await localStorage.getItem("token");
    const res = await fetch(`${apiUrl}/users/${id}`, {
        method: "PUT",
        headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
        },
        body
    });
    const data = await res.json()

    return data
}
