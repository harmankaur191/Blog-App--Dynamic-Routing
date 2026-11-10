import { useContext } from "react";
import Blog from "./Components/Blog";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import Navbar from "./Components/Navbar";
import LogIn from "./Components/LogIn";
import {Route} from 'react-router-dom'
import { Routes } from "react-router-dom";
import BlogPost from "./Components/BlogPost";
import ProtectedRoute from "./Components/ProtectedRoute";
import Admin from './Components/Admin'

export default function App() {
  //  const {isAuthenticated,login, logout} = useContext(AuthContext)

  return (
    <AuthProvider>
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<h1>Welcome to our Blog App</h1>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path = '/blog/:slug' element={<BlogPost/>}/>
          <Route path= '/login' element={<LogIn/>}/>
          <Route path='/admin' element={<ProtectedRoute><Admin/></ProtectedRoute>}/>
        </Routes>
      </div>
    </AuthProvider>
  )
}