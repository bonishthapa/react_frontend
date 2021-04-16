import React,{useState,useEffect} from 'react'
import './Maintitle.css';
import axios from 'axios'
import {Link} from 'react-router-dom';

const Maintitle = () => {
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/maintitle/')
        .then(res=>{
            console.log(res.data)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    console.log("reee")

    return (
        <div>
            <div class="container">
                <div class="row">
                    {
                        posts.map(post=>(
                        <div class="col-4">
                            <Link to={`/${post.slug}`}>
                                <div class="card" key={post.id}>
                                    <img src={post.image} class="card-img" />
                                    <div class="card-body">
                                        {post.title}
                                        <p class="text-right">{post.author}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>    
        </div>            
    )
}

export default Maintitle;
