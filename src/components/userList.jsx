import { useState,useEffect } from "react";
import '../styles/userList.css'
const UserList = () => {
    let [users,setUsers]=useState([])
    let handleDelete=(id,name)=>{
        setUsers(users.filter(x=>x.id!=id))
        alert(`${name} has been deleted`)
    }
    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch('http://localhost:2000/users')
            let data=await response.json()
            setUsers(data);
        }
        fetchData()
    },[])
    return ( 
        <div className="userlist">
             <h1>Book List:{users.length}</h1>
            <div className="users_section">
                {
                    users.map(data=>(
                        <div className="user_card">
                            <h1>Name:{data.name}</h1>
                            <h4>Age:{data.age}</h4>
                            <h4>Email:{data.email}</h4>
                            <h4>Phone Number:{data.PhoneNumber}</h4>
                            <h4>id:{data.id}</h4>
                            <div className="button">
                            <button onClick={()=>handleDelete(data.id,data.name)}>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
     );
}
 
export default UserList;