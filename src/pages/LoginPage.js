import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate=useNavigate();

    const handleLogin = async () => {
        setError("")
        const responce = await fetch("http://localhost:5000/api/login")
    }
    return <>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card p-4 shadow">
                        <h2 className="text-center mb-4">Login</h2>
                        <form>
                            <div className="mb-4">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                    value={email}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                    value={password}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Login</button>
                            <p className="mt-3">Don't have an account?<button className="btn btn-danger" onClick={() => navigate("/register")}>Register</button></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>

}


