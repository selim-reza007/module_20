"use client";

import { registerUser } from "@/app/utility/registrationUtil";
import Link from "next/link";
import { useState } from "react";

export default function RegistrationCompo() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        number: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await registerUser(user);
        console.log(res['msg']);
        if (res['status'] === "Success") {
            alert("New user created!");
            setUser({ email: "", name: "", number: "", password: "" });
        } else {
            alert("Something went wrong!")
        }
    };

    return (
        <div className="max-w-xl mx-auto bg-slate-200 rounded-lg mt-5">
            <form className="card-body" onSubmit={e => handleSubmit(e)}>
                <label className="text-xl font-bold">User registration form</label>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input onChange={(e) => setUser({ ...user, name: e.target.value })} value={user['name']} type="text" placeholder="Name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Number</span>
                    </label>
                    <input onChange={e => setUser({ ...user, number: e.target.value })} value={user['number']} type="number" placeholder="Mobile Number" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input onChange={e => setUser({ ...user, email: e.target.value })} value={user['email']} type="email" placeholder="email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input onChange={e => setUser({ ...user, password: e.target.value })} value={user['password']} type="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Save</button>
                </div>
                <div className="form-control mt-6">
                    <Link href={'/unauthorized'} className="btn btn-warning" >Discard</Link>
                </div>
            </form>
        </div>
    );
}