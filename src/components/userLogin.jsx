import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/userLogin.css'
const UserLogin = () => {
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let navigate=useNavigate()
    let login=()=>{
        navigate('/user/')
    }
    return ( 
        <div className="userLogin">
            <div className="form container card">
                <h1>Login as user</h1>
                <div className="form_input">
                    <form  onSubmit={login} action="">
                        <div className="email">
                        <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email address" />
                        </div>
                        <div className="password">
                            <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="enter password"  />
                        </div>
                        <div className="button1">
                        <button >Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default UserLogin;