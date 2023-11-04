import { headers } from "next/headers";

async function getHeaders() {
    let headerList = headers();
    let user_id = parseInt(headerList.get('id'));
    return user_id;
}

export default function Dashboard() {

    let uid = getHeaders();

    return (
        <div>
            <p className="text-3xl font-bold">Welcome to Dashboard</p>
        </div>
    );
}