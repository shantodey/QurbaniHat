'use client'

import logo from '@/assets/og.png'
import { signOut, useSession } from '@/lib/auth-client';
import Image from "next/image";
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const Navber = () => {
    const { data: session } = useSession()
    const user = session?.user;
    const router = useRouter()
    const handleSignOut = async () => {
        await signOut()
        router.push('/')
    }

    return (
        <div className="sticky top-0 z-50 bg-[#0B3B2E] shadow-md">
            <div className="container mx-auto ">
                <div className="navbar px-0 ">
                    <div className="navbar-start">
                        <div className="dropdown lg:hidden">
                            <div tabIndex={0} role="button"className="btn btn-ghost text-white" >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] w-56 rounded-2xl bg-white p-3 shadow-xl">
                                <li><Link href={'/'}>Home</Link></li>
                                <li><Link href={'/all-animal'}>All Animal</Link></li>
                                {user ? (
                                            <>
                                                <li> <Link href={'/profile'}> Profile</Link> </li>
                                                <li> <button onClick={handleSignOut}> Logout</button></li>
                                            </>
                                        ) : (
                                        <li> <Link href={'/login'}> Login</Link></li>
                                    )
                                }
                            </ul>
                        </div>
                        <Link href={'/'}> <Image  src={logo}  alt='logo'  height={100} width={220}  priority /></Link>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal gap-2 px-1 text-white font-medium">
                            <li> <Link href={'/'}>   Home </Link></li>
                            <li> <Link href={'/all-animal'}>     All Animal </Link> </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {user ? 
                            (
                                <div className='flex items-center gap-3'>
                                    <Link  className='capitalize text-white font-semibold'  href={'/profile'}  >  {user.name} </Link>
                                    <button  onClick={handleSignOut} className='btn bg-yellow-400 hover:bg-yellow-500 border-none text-black rounded-xl' > Logout</button>
                                </div>
                            ) : 
                            (
                                <Link href={'/login'} className='btn bg-yellow-400 hover:bg-yellow-500 border-none text-black rounded-xl'>Login</Link> 
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;