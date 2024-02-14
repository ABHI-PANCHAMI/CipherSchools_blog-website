import { BrowserRouter,Route, Routes } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/Footer"

import Home from "../pages/Home"
import PostDtail from "../pages/PostDtail"
import AuthorPost from "../pages/AuthorPost"
import CategoryPosts from "../pages/CategoryPosts"
import Login from "../pages/Login"
import Logout from "../pages/Logout"
import Dashboard from "../pages/Dashboard"
import Authors from "../pages/Authors"
import EditPost from "../pages/EditPost"
import DeletePost from "../pages/DeletePost"
import CreatePost from "../pages/CreatePost"
import Register from "../pages/Register"
import UserProfile from "../pages/UserProfile"
import ErrorPage from "../pages/ErrorPage"







export default function Router() {
  return (
    <div>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/authors" element={<Authors/>}/>
            <Route path="/posts/user/:id" element={<AuthorPost/>}/>
            <Route path="/posts/:id" element={<PostDtail/>}/>
            <Route path="/create" element={<CreatePost/>}/>
            <Route path="/posts/categories/:category" element={<CategoryPosts/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/myposts/:id" element={<Dashboard/>}/>
            
            <Route path="/posts/:id/edit" element={<EditPost/>}/>
            {/*<Route path="/delete/:id" element={<DeletePost/>}/>*/}
            
            <Route path="/register" element={<Register/>}/>
            <Route path="/profile/:id" element={<UserProfile/>}/>
            <Route path="*" element={<ErrorPage/>}/>

                    </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  )
}
