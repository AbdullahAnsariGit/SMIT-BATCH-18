import React, { useState } from "react";
import { supabase } from "../utils/supabase";
import { useNavigate } from "react-router"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    async function signInWithEmail() {

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            alert(error.message);
            return;
        }

        // Save data in localStorage
        localStorage.setItem("token", data.session.access_token);
        localStorage.setItem("refreshToken", data.session.refresh_token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate('/')
        alert("Login Successful!");

        console.log("Session:", data.session);
        console.log("User:", data.user);

        // Example: Redirect
        // window.location.href = "/dashboard";
    }

    return (
        <>
            <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial, Helvetica, sans-serif;
        }

        body{
          background:#f4f7fc;
        }

        .login-container{
          height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          background:linear-gradient(135deg,#6C63FF,#4A90E2);
        }

        .login-box{
          width:380px;
          background:#fff;
          padding:35px;
          border-radius:15px;
          box-shadow:0 10px 30px rgba(0,0,0,0.2);
        }

        .login-box h2{
          text-align:center;
          margin-bottom:25px;
          color:#333;
        }

        .input-group{
          margin-bottom:18px;
        }

        .input-group label{
          display:block;
          margin-bottom:6px;
          font-weight:bold;
          color:#555;
        }

        .input-group input{
          width:100%;
          padding:12px;
          border:1px solid #ccc;
          border-radius:8px;
          outline:none;
          transition:.3s;
          font-size:15px;
        }

        .input-group input:focus{
          border-color:#6C63FF;
          box-shadow:0 0 8px rgba(108,99,255,.3);
        }

        .login-btn{
          width:100%;
          padding:12px;
          border:none;
          border-radius:8px;
          background:#6C63FF;
          color:#fff;
          font-size:16px;
          cursor:pointer;
          transition:.3s;
          font-weight:bold;
        }

        .login-btn:hover{
          background:#574bdb;
        }

        .signup-text{
          text-align:center;
          margin-top:18px;
          color:#666;
        }

        .signup-text a{
          color:#6C63FF;
          text-decoration:none;
          font-weight:bold;
        }

        .signup-text a:hover{
          text-decoration:underline;
        }

        @media(max-width:420px){
          .login-box{
            width:90%;
            padding:25px;
          }
        }
      `}</style>

            <div className="login-container">
                <div className="login-box">
                    <h2>Welcome Back</h2>

                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        className="login-btn"
                        onClick={signInWithEmail}
                    >
                        Login
                    </button>

                    <p className="signup-text">
                        Don't have an account? <a href="/signup">Sign Up</a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Login;