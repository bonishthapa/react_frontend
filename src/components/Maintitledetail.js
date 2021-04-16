import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Maintitledetail.css'

const Maintitledetail = () => {
    const {slug} = useParams()
    console.log(slug)

    const [posts,setPosts]=useState({})

    useEffect(()=>{
        axios.get(`http://192.168.2.105:8000/api/maintitle/${slug}`)
        .then(res=>{
            // console.log(res.data)
            setPosts(prevState => res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[slug])

    return (
        <div>
            <div className="container" key={posts.id}>
                <img src={posts.image} className="maintitle-img" />
                <div className="title">
                    <h1> {posts.title} </h1>
                    <div className="card-body">
                        {posts.description}
                        <p class="text-right">
                            {posts.author}
                            <br />
                            {posts.created_on}
                        </p>
                    </div>
                    <div className="container">
                        {/* {console.log("hellooo", posts.subtitle.title)} */}
                        {/* {posts.subtitle.map(sub => {
                            return console.log(sub.title);
                        })} */}
                        { Object.keys(posts).length === 0 ? "Data is loading......" :
                            posts.subtitle.map((subtitle)=>{
                                return <div className="card">
                                    <div className="subtitle">
                                        <h4>{subtitle.tilte}</h4>
                                        <img src={subtitle.image} className="subtitle-img" />
                                        <div className="card-body">{subtitle.description}<p><i>Available on:</i> {subtitle.available_on}</p></div>
                                    </div>
                                </div>    
                            })}
                        
                    </div>    
                </div>
            </div>
        </div>
    )
};

export default Maintitledetail;
