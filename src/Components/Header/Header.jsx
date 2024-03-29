import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Picture from '../../assets/Logo/creative-vector-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mo-107388687.webp';
import { userContext } from '../../AuthContext/AuthContext';

const Header = () => {
    const {user, logout} = useContext(userContext);

    return (
        <header className="container mx-auto">
            <div className="navbar bg-base-100 rounded">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        {
                            user ? '' : <div>
                            <li><Link to="/register">Register</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            </div>    
                        }
                    </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link to="/" className="btn btn-ghost text-xl">Auth Master</Link>
                </div>
                {
                    user && <div className="navbar-end">
                    <div className="bg-base-100">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={`${user && user.photoURL ? user.photoURL : Picture}`} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li><Link>Profile
                                    <span className="badge">New</span></Link></li>
                                <li><Link>Settings</Link></li>
                                <li onClick={logout}><Link>Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                }
            </div>
        </header>
    );
};

export default Header;