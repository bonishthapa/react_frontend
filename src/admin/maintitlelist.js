import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import './Sidebar.css'
import './Maintitlelist.css'
import { Link } from 'react-router-dom'

const MainTitleList = () => {

    const [posts,setPosts]=useState({})

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/maintitle/')
        .then(res=>{
            console.log(res.data);
            setPosts(res.data);
        })
        .then(err=>{
            console.log(err);
        })
    },[])
    return (
        <div className="App">
           <Sidebar /> 
           <div class="main">
                <div class="container">
                    <h2>Maintitle List</h2>            
                    <table class="table">
                        <thead>
                            <tr>
                            <th>S.N</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Subtitle</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(posts).length === 0 ? "Data is loading......" :
                                posts.map(post=>(
                                    <div key={post.id}> 
                                    <tr>
                                    <td>1</td>	
                                    <td>{post.title}</td>
                                    <td>{post.description}</td>
                                    <td><img src={post.image} className="admin-maintitle-img" /></td>
                                    <td>
                                        <ul>
                                            {
                                            post.subtitle.map(subtitle=>(
                                                <li>{subtitle.title}</li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td>
                                        <Link to={`/edit/${post.slug}`}  class="btn btn-warning">Update</Link>
                                        <Link to={`/delete/${post.slug}`}  class="btn btn-danger">Delete</Link>
                                    </td>
                                    </tr>
                                    </div>   
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MainTitleList;
