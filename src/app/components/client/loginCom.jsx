"use client";

import { AiFillBackward } from 'react-icons/ai';
import Link from "next/link";
import { useState } from "react";
import { loginAttempt } from '@/app/utility/LoginUtil';
import { useRouter } from 'next/navigation';

export default function LoginComponent() {

    const router = useRouter();

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleLogin = async (e) => {
        e.preventDefault();
        let res = await loginAttempt(user);

        if (res['msg'] === "Login Success") {
            alert("Login succesful");
            router.replace("/dashboard");
        } else {
            alert("Login fail");
        }
    }

    return (
        <div className="bg-base-200">
            <div className="h-[100px] items-center flex max-w-5xl mx-auto">
                <Link className="text-2xl font-bold flex items-center gap-2" href={'/'}><AiFillBackward />Back to Home</Link>
            </div>
            <div className="hero h-[550px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-[50%]">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">


                        <form onSubmit={e => handleLogin(e)} className="card-body">
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
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="py-5">Not Registred? <Link className="text-blue-600 underline" href={'/registration'}>Click hrer for Registration</Link></p>
                        </form>


                    </div>
                </div>
            </div>
        </div >
    );
}