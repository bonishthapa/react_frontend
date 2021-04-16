import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
           <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <nav className="navbar-brand">MY SITE</nav>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/createpost" className="nav-link">Posts</Link>
                        </li>
                    </ul>
                    <form className="form-inline" action="/action_page.php">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-success" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/createpost" className="nav-link" >Create Post</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="nav-link" >Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Header;