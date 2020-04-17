import React from 'react'
import {Link} from "react-router-dom";

 function Navbar(props) {
    return (
        <div >
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark" >
                <div className="container ">
                    <ul className="navbar-nav col">
                        <li className="nav-item col-2">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item col-2 ">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        <li className="nav-item col-2">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item col-2">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                    <form className="form-inline " action="/action_page.php">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                        <button className="btn btn-success my-1 " type="submit">Search</button>
                    </form>
               </div>
            </nav>
            
            <ul>
                {/* <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/login"> Login  </Link>
                </li>
                <li>
                    <Link to="/about">About </Link>
                </li>
                <li>
                    <Link to="/contact">Contact </Link>
                </li> */}
            </ul>
        </div>
    )
}

export default Navbar;
