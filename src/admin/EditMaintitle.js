import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,useHistory } from 'react-router-dom';
import Sidebar from './Sidebar'
import './Sidebar.css'

const EditMaintitle = () => {
    const {slug} = useParams()
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/maintitle/${slug}/`)
        .then(res => {
            console.log(res.data)
            setFormsData(res.data)
            
        })
        .catch(error => {
            console.log(error.response.data);
        });
    },[])
    let history = useHistory();
    
    const [formsData, setFormsData] = useState({
        title:"",
        description:"",
    })
    const [file,setFile]=useState({
        image:""
    })
    const {title,description}=formsData;
    const handleInputChange = (event) => {
        setFormsData({...formsData,[event.target.name]: event.target.value});
    }
    const imageHandle=(e)=>{
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
        // setFormsData({...formsData, [e.target.name]:e.target.files[0]})
        console.log(formsData)
    }
    const handleFormSubmit =(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", formsData.title);
        formData.append("description", formsData.description);
        formData.append("image", file);
        console.log(formData);
        axios.put(`http://127.0.0.1:8000/api/maintitle/${slug}/`,formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
        .then(res => {
            console.log("ressss", res.data);
        }).catch(err => {
            console.log(err.response.data);
        });
        history.push('/maintitlelist')
    }
    return (
        <div>
        <Sidebar />
            <div className="main">
                <div className="container">
                    <form onSubmit={handleFormSubmit} key={formsData.id}>
                        <div className="form-group" >
                            <label for="title">Title</label>
                            <input type="text" onChange={handleInputChange} name="title" className="form-control" value={title} />
                        </div>
                        <div className="form-group">
                            <label for="descripton">Description</label>
                            <textarea type="text" onChange={handleInputChange} name="description" className="form-control" value={description}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlFile1">Upload Image</label>
                            <input type="file" className="form-control-file" name="image" onChange={imageHandle} />
                        </div>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>    
            </div>    
        </div>
    )
}

export default EditMaintitle;
