import React, { useState } from "react";

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return(
        <div className="login-page">
        <div className="login-container">
            <h2 className="login-heading">Welcome,</h2>
            <h5><center>Please login to experience the best</center></h5>
            <div className="form-container">
                <form className="form">
                    <div className="input-field">
                        Login id
                        <input type="email" name="email" value={username}  onChange={(e)=>setUsername(e.target.value)}placeholder="Enter your email id or phone number"/>
                    </div>
                    <div className="input-field">
                        Password
                        <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/>
                    </div>
                    <div className="form-submit">
                        <center><button type="submit" onClick={()=>{console.log("submitted"+username+password)}}><strong>Login</strong></button></center>
                    </div>
                    <div className="login-footer">
                        Having trouble logging in ?<br/>
                    </div>
                    <div className="login-footer">
                        Don't have an account, <a href="google.com">Sign up here</a><br/>
                    </div>
                </form>
            </div>
            
        </div>
        </div>
    )
}

export default LoginForm;