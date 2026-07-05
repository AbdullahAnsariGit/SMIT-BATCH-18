import React, { useEffect } from "react";
import { useNavigate } from "react-router"

function Home() {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("user"));
    const token = (localStorage.getItem("token"));
    useEffect(() => {
        if (!token) {
            navigate('/login')
        }


    }, [])

    return (
        <div
            style={{
                padding: "40px",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <h1>🏠 Home</h1>

            {user ? (
                <div
                    style={{
                        marginTop: "20px",
                        padding: "20px",
                        border: "1px solid #ddd",
                        borderRadius: "10px",
                        width: "400px",
                        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                    }}
                >
                    <h2>Welcome, {user.user_metadata.name} 👋</h2>

                    <p>
                        <strong>Name:</strong> {user.user_metadata.name}
                    </p>

                    <p>
                        <strong>Email:</strong> {user.email}
                    </p>

                    <p>
                        <strong>User ID:</strong> {user.id}
                    </p>

                    <p>
                        <strong>Role:</strong> {user.role}
                    </p>

                    <p>
                        <strong>Email Verified:</strong>{" "}
                        {user.user_metadata.email_verified ? "✅ Yes" : "❌ No"}
                    </p>
                </div>
            ) : (
                <h2>No user found. Please login.</h2>
            )}
        </div>
    );
}

export default Home;