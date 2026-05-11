'use client'

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Logo from '@/assets/og.png'
import { IoLogInOutline } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
    const handelSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const userData = Object.fromEntries(formData)
        console.log(userData);

        const { data, error } = await authClient.signIn.email(
            {
                email: userData.email,
                password: userData.password,
                callbackURL: "/"
            },
            {

                onSuccess: (ctx) => {
                    alert('its work ')
                },
                onError: (ctx) => {
                    // display the error message
                    alert(ctx.error.message);
                },
            }
        );

    }
     const handelGoogleSingin = async() => {
            const data = await authClient.signIn.social({
                provider: "google",
            });
        }
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md mb-6">
                <div className="text-center">
                    <div className="flex justify-center">
                        <Image src={Logo} height={100} alt='logo'></Image>
                    </div>
                </div>

                <h2 className="text-center text-gray-600 mb-8 text-lg">Login to your account</h2>

                <form className="space-y-5" onSubmit={handelSubmit}>
                    <fieldset>
                        <legend className="sr-only">Login Form</legend>

                        <div>
                            <label className="block text-sm font-semibold text-gray-800 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name='email'
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-800 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                name='password'
                                placeholder="••••••••"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-emerald-900 hover:bg-emerald-950 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2 mt-6"
                        >
                            <IoLogInOutline />
                            Login
                        </button>
                    </fieldset>
                </form>

                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">or</span>
                    </div>
                </div>

                <button onClick={handelGoogleSingin} className="w-full border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2">
                    <FcGoogle />
                    Login with Google
                </button>

                <div className="text-center mt-6">
                    <p className="text-gray-700 text-sm">
                        Don't have an account?{' '}
                        <a href="/register" className="font-semibold text-gray-900 hover:underline">
                            Register here
                        </a>
                    </p>
                </div>
            </div>

            <a href="/" className="text-gray-700 hover:text-gray-900 font-semibold flex items-center gap-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Home
            </a>
        </div>
    );
};

export default LoginPage;