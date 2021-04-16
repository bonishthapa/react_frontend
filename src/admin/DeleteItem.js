import React from 'react'
import { useParams,useHistory } from 'react-router';
import Sidebar from './Sidebar';

const DeleteItem = () => {
    let history = useHistory();
    const {slug} = useParams();
    console.log(slug)
    const deleteItemHandle=(e)=>{
        fetch(`http://127.0.0.1:8000/api/maintitle/${slug}/`,{
            method: "DELETE"
        })
        history.push('/maintitlelist')
    }

    return (
        <div>
            <Sidebar />
            <div class="main">
                <button className="btn btn-danger" onClick={deleteItemHandle}>Delete</button>
            </div>
        </div>
    )
}

export default DeleteItem;
