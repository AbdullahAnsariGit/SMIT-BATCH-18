import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
    return (
        <div class="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg">
            <h2 class="text-3xl font-bold text-center mb-6">Create Account</h2>

            <form class="space-y-4">
                <div>
                    <label class="block text-sm font-medium mb-1">Full Name</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <div>
                    <label class="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <div>
                    <label class="block text-sm font-medium mb-1">Password</label>
                    <input
                        type="password"
                        placeholder="********"
                        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <button
                    type="submit"
                    class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Sign Up
                </button>
            </form>

            <p class="text-center text-sm mt-4">
                Already have an account?
                <Link  to="/login" class="text-blue-600 hover:underline">Login</Link>
            </p>
        </div>
    )
}

export default SignUp