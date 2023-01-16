import '../styles/userDashboard.css';
import { Link } from 'react-router-dom';

const UserPortal = () => {


    return ( 
        <div className="user_Portal">
            
            <div className="mainuser">
            <div className="usrdashimg">
            <div className="user_Dashboard">
                    <h1>Welcome to UserDashboard</h1>
                </div>

                <div className="usrframeimg">
                <img width="800px" height="300px" src="/images/lib.jpg" alt="" />
                <div className="usrbookinfo">
                        <div className="usrbookinfolist">
                            <h2>Library to Host an Evening of Boardway Cabaret.. </h2>
                            
                            <p>By Erika Berlin on January 12, 2023 <br />
                                <b>The Friends of Greenwich Library are pleased to <br />
                                    host a special night of cabaret-style <br />
                                    performances with How I Got to…</b></p>

                            <div className="usrbookinfolink">
                                <Link to="">Take a Look</Link>
                            </div>

                        </div>
                    </div>
                

                </div>

                </div>
                <div className="mainuser1">
            <div className="usrstep1">
                <img width="800px" height="300px" src="/images/lib.jpg" alt="" />
            </div>
            <div className="usrbookinfo1">
                <div className="usrbookinfolist1">
                <h2>At the Library this January... </h2>
                
                <p>By Erika Berlin on December 29, 2022 <br />
                <b>Greenwich Library has a full schedule of (free!) enrichment events <br />
                    throughout January. Speak with a librarian or check the online…</b></p>
                </div>

                <div className="usrbookinfolink1">
                <Link to="">Take a Look</Link>
                </div>
            </div>
            </div>

            <div className="mainuser2">
                <div className="usrstep2">
                <img width="800px" height="300px" src="/images/lib.jpg" alt="" />
                </div>
                <div className="usrbookinfo2">
                    <div className="usrbookinfolist2">
                    <h2>Signature Series: In the News with Fareed Zakaria</h2>
                
                
                <p> By Erika Berlin on January 11, 2023<br />
                <b>Greenwich Library’s Signature Series is pleased to welcome <br />
                    bestselling author and journalist Fareed Zakaria to the Library’s <br />
                    Berkley Theater on Thursday,…</b></p>

                    </div>
                    <div className="usrbookinfolink2">
                <Link to="">Take a Look</Link>
                </div>
                    
                </div>
				</div>

            </div>
        </div>
     );
}
 
export default UserPortal;