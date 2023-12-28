import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../AuthContext/AuthContext';
import toast from 'react-hot-toast';
import Home from '../Home/Home';

const Register = () => {
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState("fa-solid fa-eye-slash");
    const {authEmailAndPassword, authName, googleProvider, githubProvider} = useContext(userContext);

    const show = () => {
        type === "password" ? setType("text") : setType("password");
        icon === "fa-solid fa-eye"
          ? setIcon("fa-solid fa-eye-slash")
          : setIcon("fa-solid fa-eye");
      };

    // Toast
    const toastSuccess = (success) => toast.success(success);
    const toastError = (error) => toast.error(error);

    const handleSingUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // Auth Email And Password
        authEmailAndPassword(email, password)
        .then(result => {
            console.log(result.user);
            toastSuccess('Sing Up SuccessFull');
            form.reset();
        })
        .catch(error => {
            toastError(error.message.substr(10));
        })

        // Auth Name
        authName(name)
        .then(result => {
            console.log(result,"Name SuccessFull Added");
        })
        .catch(error => {
            console.log(error.message);
        })

    }
    // GoogleAuthProvider
    const googleAuth = () => {
        googleProvider()
        .then(() => {
            toastSuccess('Sing Up SuccessFull')
            
        })
        .catch(error => {
            toastError(error.message.substr(10))
        })
    }

    // GitHubAuthProvider
    const githubAuth = () => {
        githubProvider()
        .then(() => {
            toastSuccess('Sing Up SuccessFull')
        })
        .catch(error => {
            toastError(error.message.substr(10))
        })
    }
    return (
        <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign Up to your account
                </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSingUp} className="space-y-6">
                    <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        Name
                    </label>
                    <div className="mt-2">
                        <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="text"
                        required
                        className="block bg-white px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block bg-white px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                        </label>
                    </div>
                    <div className="mt-2 relative">
                        <input
                        id="password"
                        name="password"
                        type={type}
                        autoComplete="current-password"
                        required
                        className="block bg-white px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <div className="w-5 absolute top-2 right-2 cursor-pointer">
                            <i onClick={show} className={icon}></i>
                        </div>
                    </div>
                    </div>

                    <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sing Up
                    </button>
                    </div>
                </form>
                <div className='my-7'>
                    <div className="flex justify-between items-center">
                        <div className='border w-1/4'></div>
                        <p className='text-black text-center'>Or continue with</p>
                        <div className='border w-1/4'></div>
                    </div>
                    <div className='flex gap-5 mt-5'>
                        <button onClick={googleAuth} className="flex justify-center items-center gap-3 text-white font-medium bg-red-500 py-[8px] w-1/2 rounded-md">
                            <i className="fa-brands fa-google text-white"></i>
                            Google
                        </button>
                        <button onClick={githubAuth} className="flex justify-center items-center gap-3 text-white font-medium bg-black py-[8px] w-1/2 rounded-md">
                        <i className="fa-brands fa-github"></i>
                            GitHub
                        </button>
                    </div>
                </div>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Already Account?{' '}
                    <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Login
                    </Link>
                </p>
                </div>
            </div>
        </div>
    );
};

export default Register;