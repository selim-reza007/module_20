export async function loginAttempt(credentials) {
    let response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        body: JSON.stringify(credentials)
    });
    if (response.status !== 200) {
        return "Something went wrong!";
    }
    const data = await response.json();
    return data;
}