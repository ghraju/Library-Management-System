import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adminLogin.css'
const AdminLogin = ()=> {
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let navigate=useNavigate()
    let login=(e)=>{
        e.preventDefault();
        let data={email,password}
        // console.log(data);
        if(email === "admin@gmail.com" && password === 'admin')
        {
            navigate('/admin/')
        }
        else{
            alert("Invalid Credentials")
        }
    }
    return ( 
        <div className="AdminLogin">
            <div className="form container card">
                <h1>Login as Admin</h1>
                <div className="form_input">
                    <form action="" onSubmit={login}>
                        <div className="email">
                        <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email address" />
                        </div>
                        <div className="password">
                            <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="enter password"  />
                        </div>
                        <div className="button">
                        <button >Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default AdminLogin;