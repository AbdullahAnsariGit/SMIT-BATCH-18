import React, { useState } from "react";
import './signup.css'
import { supabase } from "../utils/supabase";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function signUpNewUser() {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    name: name,
                },
            },
        });

        if (error) {
            alert(error.message);
        } else {
            alert("Signup successful! Check your email.");
            console.log(data);
        }
    }

    return (
        <>
            {/* Your CSS */}

            <div className="signup-container">
                <div className="signup-box">
                    <h2>Create Account</h2>

                    <div className="input-group">
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

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
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <button className="signup-btn" onClick={signUpNewUser}>
                        Sign Up
                    </button>

                    <p className="login-text">
                        Already have an account? <a href="/">Login</a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Signup;