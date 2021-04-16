import axios from 'axios'
import React, { useState } from 'react'


const Register = () => {

    const [formData, setFormData]=useState({
        name:"",
        username:"",
        first_name:"",
        last_name:"",
        password:""
    })

    const inputHandle=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const formSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/register", formData)
        .then(res=>{
            console.log(res.data);
        })
        .then(err=>{
            console.log(err);
        })
    }

    return (
        <div>
            <div className="col-md-6 login-form-1 register">
                <h3>Register</h3>
                <form onSubmit={formSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Email" name="email" onChange={inputHandle} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username" name="username" onChange={inputHandle} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="First Name" name="first_name" onChange={inputHandle} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Last Name" name="last_name" onChange={inputHandle} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Your Password" name="password" onChange={inputHandle} />
                    </div>
                    <div className="form-group">
                        <button className="btnSubmit">Submit</button>
                    </div>
                </form>
            </div> 
        </div>
    )
}

export default Register;
