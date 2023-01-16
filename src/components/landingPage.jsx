import { Link } from "react-router-dom";
import '../styles/landingPage.css'
const LandingPage=()=>{
    return(
        <div className="landingPage">
            <div className="selectLogintype">
                <h1>Library Management System</h1>
                <div className="icon">
                <div className="red">
                <img src="images/red.png" alt="" />
                </div>
                    <div className="green">
                    <img src="images/green.png" alt="" />
                    </div>
                </div>
                <div className="link">
                <div className="link1">
                <Link  className="link1" to='/admin-login'>Admin</Link>
                </div>
                <div className="link2">
                    <Link className="link2" to='/user-login'>User </Link>
                </div>
                </div>
            </div>
        </div>
    )
}
export default LandingPage;