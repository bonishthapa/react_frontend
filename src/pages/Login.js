import React from 'react'
import './Login.css';

const Login = () => {
    return (
        <div>
            <div className="col-md-6 login-form-1">
                <h3>Login</h3>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Email *" value="" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Your Password *" value="" />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btnSubmit" value="Login" />
                    </div>
                    <div className="form-group">
                        <a href="#" className="ForgetPwd">Forget Password?</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
