export async function getAllServices() {
    let response = await fetch("http://localhost:3000/api/services", { cache: "no-store" });
    if (response.status !== 200) {
        return "Something went wrong!";
    }
    const data = await response.json();
    return data;
}