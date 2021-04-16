import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'


const CreateSubTitle = () => {

    const [posts,setPosts]=useState([])

    const [formsData,setFormsData]=useState({
        title:"",
        description:"",
        available_on:"",
    })
    const [file,setFile]=useState({
        // image:""
    })

    const imageHandle=(e)=>{
        setFile(e.target.files[0])
        console.log(e.target.files[0])
        // setFormsData(formsData.image: file.image);
    }

    // console.log(formsData);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/maintitle/")
        .then(res=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    const[maintitle,setMaintitle]=({
        "maintitle":"",
    })
    const inputHandle=(e)=>{
        setFormsData({...formsData,[e.target.name]:e.target.value})

    }
    const handleSelect=(e)=>{
        setMaintitle({...maintitle, [e.target.name]: e.target.selectedOptions});
        console.log(formsData);
    }

    // const selectHandler=(e)=>{
    //     const selected=[];
    //     let selectedOption=(e.target.selectedOptions);

    //     for (let i=0; i < selectedOption.length; i++) {
    //         selected.push(selectedOption[i].value);
    //     }
    //     setFormsData({...formsData, [e.target.name]: selected});
    //     console.log(selected);
    // }

    const formHandle=(e)=>{
        e.preventDefault();
        // axios.post('http://192.168.254.47:8000/api/subtitle',formData,maintitle)
        // .then(res=>{
        //     console.log(res.data);
        //     return res.data;

        // })
        const formData = new FormData();
        formData.append("title", formsData.title);
        formData.append("description", formsData.description);
        formData.append('available_on',formsData.available_on);
        formData.append('maintitle', maintitle.maintitle);
        formData.append("image", file);
        
        console.log("FORM DARA", formsData);
        axios.post('http://127.0.0.1:8000/api/subtitle/', formsData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res=>{
            console.log(res.data);
            return res.data;
            })
        .catch(err=>{
            console.log(err);
        })
    }
    // console.log(formsData)
    return (
        <div>
            <Sidebar />
            <div class="main">
                <div class="container">
                    <form onSubmit={formHandle} encType="multipart/form-data">
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" name="title" class="form-control" onChange={inputHandle} />
                        </div>
                        <div class="form-group">
                            <label for="descripton">Description</label>
                            <textarea type="text" name="description" class="form-control" onChange={inputHandle}></textarea> 
                        </div>
                        <div class="form-group">
                            <label for="available">Available On</label>
                            <input type="text" name="available_on" class="form-control" onChange={inputHandle} />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlFile1">Upload Image</label>
                            <input type="file" class="form-control-file" id="exampleFormControlFile1" name="image" onChange={imageHandle} />
                        </div>
                        <label for="maintitle">Maintitle</label>
                        <div class="form-group">
                            <select class="selectpicker" name="maintitle" onChange={handleSelect}>
                                {
                                    posts.map(post=>(
                                        <option value={post.id}>{post.title}</option>
                                    )
                                )}
                            </select>
                        </div>        
                        <button class="btn btn-primary">Submit</button>
                    </form>
                </div>    
            </div>
        </div>
    )
}    

export default CreateSubTitle;
