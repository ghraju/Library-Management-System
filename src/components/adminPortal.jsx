import {Routes,Route} from 'react-router-dom';
import AdminNavbar from "./adminNavbar";
import AdminDashboard from "./admindashboard";
import'../styles/adminPortal.css'
import BookList from './bookList';
import UserList from './userList';
import ReadBook from "./readBook";
import AddBook from "./addBook";
import AddUser from "./addUser";
const AdminHome = () => {
    return ( 
        <div className="adminHome">
            <AdminNavbar/>
            <div className="routes">
            <Routes>
                <Route path="/" element={<AdminDashboard/>}/>
                <Route path="/book-list" element={<BookList/>}/>
                <Route path="/user-list" element={<UserList/>}/>
                <Route path="/book-list/:id" element={<ReadBook/>}/>
                <Route path="/add-book" element={<AddBook/>}/>
                <Route path="/add-user" element={<AddUser/>}/>
            </Routes>
            </div>
        </div>
     );
}
 
export default AdminHome;