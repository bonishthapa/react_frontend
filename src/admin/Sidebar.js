import React from 'react'
import {Link} from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div>
            <div className="sidenav">
                <Link to="/createpost">Create Maintitle</Link>
                <Link to="/maintitlelist">Maintitle List</Link>
                <Link to="/createsubtitle">Create Subtitle</Link>
                <Link to="/subtitlelist">Subtitle List</Link>
            </div>
        </div>
    )
}

export default Sidebar;
