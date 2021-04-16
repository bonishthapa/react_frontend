import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import './Sidebar.css'


const CreateMainTitle = () => {

    const [formsData, setFormsData] = useState({
        title: "",
        description: ""
        // image:""
    })

    const [file,setFile]=useState({
        image:""
    })

    const handleInputChange = (event) => {
        setFormsData({...formsData, [event.target.name]: event.target.value});
        // setImage({...image,[event.target.file]:event.target.file})
    }

    // const config = {
    //     headers: { 'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' }
    //    }

    const imageHandle=(e)=>{
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
        // setFormsData({...formsData, [e.target.name]:e.target.files[0]})
        console.log(formsData)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("title", formsData.title);
        formData.append("description", formsData.description);
        formData.append("image", file);

        console.log("FORM DARA", formData);

        axios.post('http://127.0.0.1:8000/api/maintitle/', formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
        .then(res => {
            console.log(res.data)
            return res.data;
            
        })
        .catch(error => {
            console.log(error.response.data);
        });
    }

    return (
        <div>
        <Sidebar />
            <div className="main">
                <div className="container">
                    <form onSubmit={handleFormSubmit} encType="multipart/form-data">
                        <div className="form-group">
                            <label for="title">Title</label>
                            <input type="text" onChange={handleInputChange} name="title" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label for="descripton">Description</label>
                            <textarea type="text" onChange={handleInputChange} name="description" className="form-control"></textarea>
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
};

export default CreateMainTitle;
