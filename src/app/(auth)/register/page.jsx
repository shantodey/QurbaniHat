'use client';
 
import React from 'react';
 
const RegisterPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#FFF8E7' }}>
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="22" stroke="#0F5132" strokeWidth="2" />
                            <path d="M24 12C28.4183 12 32 15.5817 32 20C32 24.4183 28.4183 28 24 28C19.5817 28 16 24.4183 16 20C16 15.5817 19.5817 12 24 12Z" fill="#0F5132" />
                            <path d="M14 34C14 30.6863 18.0294 28 24 28C29.9706 28 34 30.6863 34 34V36H14V34Z" fill="#0F5132" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold" style={{ color: '#0F5132' }}>Qurbanie</h1>
                </div>
 
                <h2 className="text-center mb-8 text-lg" style={{ color: '#1F2937' }}>Create your account</h2>
 
                <form className="space-y-5">
                    <fieldset>
                        <legend className="sr-only">Account Creation Form</legend>
 
                        <div>
                            <label className="block text-sm font-semibold mb-2" style={{ color: '#1F2937' }}>
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Your full name"
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
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition"
                                style={{ borderColor: '#D1D5DB', borderWidth: '1px', color: '#1F2937' }}
                                onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #198754'}
                                onBlur={(e) => e.target.style.boxShadow = 'none'}
                            />
                        </div>
 
                        <div>
                            <label className="block text-sm font-semibold mb-2" style={{ color: '#1F2937' }}>
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition"
                                style={{ borderColor: '#D1D5DB', borderWidth: '1px', color: '#1F2937' }}
                                onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #198754'}
                                onBlur={(e) => e.target.style.boxShadow = 'none'}
                            />
                            <p className="text-xs mt-1" style={{ color: '#6B7280' }}>At least 6 characters</p>
                        </div>
 
                        <div>
                            <label className="block text-sm font-semibold mb-2" style={{ color: '#1F2937' }}>
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition"
                                style={{ borderColor: '#D1D5DB', borderWidth: '1px', color: '#1F2937' }}
                                onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #198754'}
                                onBlur={(e) => e.target.style.boxShadow = 'none'}
                            />
                        </div>
 
                        <button
                            type="submit"
                            className="w-full text-white font-semibold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2 mt-6"
                            style={{ backgroundColor: '#0F5132' }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#0D4029'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#0F5132'}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                            </svg>
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
                    className="w-full font-semibold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
                    style={{ borderColor: '#D1D5DB', borderWidth: '2px', color: '#1F2937' }}
                    onMouseEnter={(e) => e.target.style.borderColor = '#198754'}
                    onMouseLeave={(e) => e.target.style.borderColor = '#D1D5DB'}
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <text x="12" y="16" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#1F2937">G</text>
                    </svg>
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
 