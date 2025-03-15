import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Register() {
    
    const navigate=useNavigate();
    const handleRegister=(e)=>{
        e.preventDefault();
        navigate('/login')
    }
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    return <>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card p-4 shadow">
                        <h2 className="text-center mb-4">Register</h2>
                        <form>
                            <div className="mb-4">
                                <label className="form-label">Name</label>
                                <input
                                    type="name"
                                    className="form-control"
                                    placeholder="Enter name"
                                    value={name}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter name"
                                    value={email}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter name"
                                    value={password}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Login</button>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </>

}