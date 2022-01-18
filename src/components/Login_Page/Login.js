import React from 'react'
import "./Login.css"

function Login() {
    return (
        <div>
            {/* <img src="./images/bg.jfif" alt="" /> */}
            <div className="container">
                <h1>User Login</h1>
                <div className="textbox">
                    <i className="fa fa-user fa-user"></i>
                    <input
                        type="mailid"
                        name="mailid"
                        id="mailid"
                        placeholder="Enter the MailId.."
                    />
                </div>
                <div className="textbox">
                    <i className="fa fa-lock fa-lock"></i>
                    <input
                        type="password"
                        name="password"
                        id="pwd"
                        placeholder="Enter the Password.."
                    />
                </div>
                <br />
                <a href="">Forget Password?</a>
                <input type="button" name="" value="Login" id="" className="btn" />
            </div>
        </div>
    )
}

export default Login
