export async function registerUser(user) {
    const response = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        body: JSON.stringify(user)
    });
    if (response.status !== 200) {
        return "Something went wrong!";
    }
    const data = await response.json();
    return data;
}