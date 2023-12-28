import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../AuthContext/AuthContext';
import toast from 'react-hot-toast';

const Login = () => {
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState("fa-solid fa-eye-slash");
    const {authSingIn} = useContext(userContext);

    // Show Password
    const show = () => {
        type === "password" ? setType("text") : setType("password");
        icon === "fa-solid fa-eye"
          ? setIcon("fa-solid fa-eye-slash")
          : setIcon("fa-solid fa-eye");
      };

    // Toast
    const toastSuccess = (success) => toast.success(success);
    const toastError = (error) => toast.error(error);
    const toastLoading = () => toast.loading('Loading');
  
    // Handle Sing In 
    const handleSingIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // Auth
        authSingIn(email, password)
        .then(result => {
            form.reset();
            toastSuccess('Login SuccessFull');
        })
        .catch(error => {
            toastError(error.message.substr(10));
        })
        
    }

    return (
        <div className="container mx-auto">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSingIn} className="space-y-6">
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
                        <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                        </a>
                        </div>
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
                        Sign in
                    </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Register
                    </Link>
                </p>
                </div>
            </div>
        </div>
    );
};

export default Login;