import React from 'react'
import { Link } from 'react-router-dom'

function Login() {

    const payload = {
        email,
        password
    }

    let token = email+password 

    localStorage(token)
    
    
    return (
        <div class="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg">
            <h2 class="text-3xl font-bold text-center mb-6">Welcome Back</h2>

            <form class="space-y-4">
                <div>
                    <label class="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                    />
                </div>

                <div>
                    <label class="block text-sm font-medium mb-1">Password</label>
                    <input
                        type="password"
                        placeholder="********"
                        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                    />
                </div>

                <div class="flex items-center justify-between text-sm">
                    <label class="flex items-center gap-2">
                        <input type="checkbox" class="rounded" />
                        Remember me
                    </label>

                    <a href="#" class="text-green-600 hover:underline">
                        Forgot Password?
                    </a>
                </div>

                <button
                    type="submit"
                    class="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                >
                    Login
                </button>
            </form>

            <p class="text-center text-sm mt-4">
                Don't have an account?
                <Link to="/signup" class="text-green-600 hover:underline">Sign Up</Link>
            </p>
        </div>
    )
}

export default Login