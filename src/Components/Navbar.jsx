import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Link } from "react-router-dom"

export default function Navbar(){
    const {isAuthenticated, logout} = useContext(AuthContext)
    return(
        <nav className="flex gap-5 text-xl font-bold">
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
            {isAuthenticated && <Link to ='/admin'>Admin</Link> }
            <div>
                 {isAuthenticated? (
                    <button onClick={logout} className="p-4 bg-black text-white">Log Out</button>
                    ):(
                    <Link to= '/login'>Log In</Link>
                    )}
            </div>
        </nav>
    );
}