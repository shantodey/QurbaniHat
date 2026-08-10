'use client';

import { authClient } from '@/lib/auth-client';
import React from 'react';
import Image from 'next/image';
import Logo from '@/assets/og.png'
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { FiUser } from 'react-icons/fi';

const RegisterPage = () => {

    const router = useRouter();
    const { register, handleSubmit, formState: { errors } }= useForm();

    const onSubmit = async (userData) => {
         const { data, error } = await authClient.signUp.email(
            {
                email: userData.email,
                password: userData.password,
                image: userData.image,
                name: userData.name,
                // Extra field required by the backend's User model
                userName: userData.userName,
                callbackURL: "/"
            },
            {
                onSuccess: (ctx) => {
                    toast.success(' Successfully registered your account')
                    router.push("/login");
                },
                onError: (ctx) => {
                    toast.error(ctx.error.message)

                },
            }
        );
    }

    const handelGoogleSingin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#FFF8E7' }}>
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
                <div className="text-center">
                    <div className="flex justify-center ">
                        <Image src={Logo} height={100} width={220} priority alt='logo' />
                    </div>
                </div>

                <h2 className="text-center mb-8 text-lg" style={{ color: '#1F2937' }}>Create your account</h2>

                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                    <fieldset>
                        <legend className="sr-only">Account Creation Form</legend>
                        <div>
                            <label className="block text-sm font-semibold mb-2" style={{ color: '#1F2937' }}> Full Name </label>
                            <input
                                type="text"
                                {...register("name", { required: 'Full name is required' })}
                                placeholder="Your full name"
                                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition"
                                style={{ borderColor: '#D1D5DB', borderWidth: '1px', color: '#1F2937' }}
                                onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #198754'}
                                onBlur={(e) => e.target.style.boxShadow = 'none'}
                            />
                            {errors.name && (
                                <p className='text-red-500 text-xs mt-1'>{errors.name.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2" style={{ color: '#1F2937' }}>Username</label>
                            <input
                                type="text"
                                {...register("userName", { required: 'Username is required' })}
                                placeholder="e.g. john_doe"
                                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition"
                                style={{ borderColor: '#D1D5DB', borderWidth: '1px', color: '#1F2937' }}
                                onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #198754'}
                                onBlur={(e) => e.target.style.boxShadow = 'none'}
                            />
                            {errors.userName && (
                                <p className='text-red-500 text-xs mt-1'>{errors.userName.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2" style={{ color: '#1F2937' }}>Image URL <span style={{ color: '#6B7280', fontWeight: 400 }}>(optional)</span></label>
                            <input
                                type="text"
                                {...register("image")}
                                placeholder="https://example.com/avatar.png"
                                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition"
                                style={{ borderColor: '#D1D5DB', borderWidth: '1px', color: '#1F2937' }}
                                onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #198754'}
                                onBlur={(e) => e.target.style.boxShadow = 'none'}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2" style={{ color: '#1F2937' }}>
                                Email Address
                            </label>
                            <input
                                type="email"
                                {...register("email", {
                                    required: 'Email address is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address'
                                    }
                                })}
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition"
                                style={{ borderColor: '#D1D5DB', borderWidth: '1px', color: '#1F2937' }}
                                onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #198754'}
                                onBlur={(e) => e.target.style.boxShadow = 'none'}
                            />
                            {errors.email && (
                                <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2" style={{ color: '#1F2937' }}>
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                {...register("password", {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters'
                                    }
                                })}
                                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition"
                                style={{ borderColor: '#D1D5DB', borderWidth: '1px', color: '#1F2937' }}
                                onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #198754'}
                                onBlur={(e) => e.target.style.boxShadow = 'none'}
                            />
                            <p className="text-xs mt-1" style={{ color: '#6B7280' }}>At least 6 characters</p>
                            {errors.password && (
                                <p className='text-red-500 text-xs mt-1'>{errors.password.message}</p>
                            )}
                        </div>



                        <button
                            type="submit"
                            className="w-full text-white font-semibold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2 mt-6"
                            style={{ backgroundColor: '#0F5132' }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#0D4029'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#0F5132'}
                        >
                            <FiUser className="w-5 h-5" />
                            Create Account
                        </button>
                    </fieldset>
                </form>

                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full" style={{ borderTopColor: '#D1D5DB', borderTopWidth: '1px' }}></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white" style={{ color: '#1F2937' }}>or</span>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={handelGoogleSingin}
                    className="w-full font-semibold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
                    style={{ borderColor: '#D1D5DB', borderWidth: '2px', color: '#1F2937' }}
                    onMouseEnter={(e) => e.target.style.borderColor = '#198754'}
                    onMouseLeave={(e) => e.target.style.borderColor = '#D1D5DB'}
                >
                    <FcGoogle />
                    Sign up with Google
                </button>

                <div className="text-center mt-6">
                    <p className="text-sm" style={{ color: '#1F2937' }}>
                        Already have an account?{' '}
                        <a href="/login" className="font-semibold hover:underline" style={{ color: '#0F5132' }}>
                            Login here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
