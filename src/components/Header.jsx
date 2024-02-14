import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

export default function Header() {
  return (
    <nav>
        <div className="container nav-container">
            <Link className="nav-logo" to={'/'}>
                <h3>Blog W<span>ebsit</span>e</h3></Link>
            <ul className="nav-menu">
                <li><Link to={'/profile'}>Profile</Link></li>
                <li><Link to={'/create'}>Create Post</Link></li>
                <li><Link to={'/authors'}>Author</Link></li>
                <li><Link to={'/logout'}>Logout</Link></li>
                </ul>
            <button className="nav-toggle-button btn  btn-danger">
            <FaBars />
            <RxCross1 />

                </button>             
        </div>
    </nav>
  )
}
