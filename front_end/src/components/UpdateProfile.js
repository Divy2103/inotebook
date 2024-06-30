import React, { useEffect, useState } from 'react'

function UpdateProfile({ user,showAlert }) {
    const hostName = "http://localhost:4000";
    const [credentials, setCredentials] = useState({ name: user.name, phone: user.phone });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!credentials.name && !credentials.phone){
            showAlert("Please fill any of the fields", "danger");
            return;
        }
        const response = await fetch(`${hostName}/api/auth/updateProfile`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ name: credentials.name, phone: credentials.phone })
        })
        const data = await response.json();
        console.log("data", data);
        if(data.success){
            showAlert("Profile updated successfully", "Success");
        }
        else{
            showAlert("Profile not updated", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className='ml-6'>
                <div className='text-2xl font-bold'>User Information</div>
                <p className='mb-2'>details and Information about user</p>
            </div>
            <hr className='m-5 bg-black h-[1.5px] ' />

            <form onSubmit={handleSubmit} className="max-w-lg my-16 xl:mx-auto mx-7">
                <div className="mt-10 flex flex-col space-y-10">
                    <div className="">
                        <label
                            htmlFor="firstName"
                            className="block font-medium leading-6 text-gray-900"
                        >
                            First name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="name"
                                id="firstName"
                                autoComplete="given-name"
                                required
                                defaultValue={user.name || ""}
                                onChange={onChange}
                                className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="">
                        <label
                            htmlFor="email"
                            className="block font-medium leading-6 text-gray-900"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                disabled={true}
                                defaultValue={user?.email || ""}
                                className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 disabled:opacity-50"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Phone number
                        </label>
                        <div className="mt-2">
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                autoComplete="phone"
                                defaultValue={user.phone || ""}
                                onChange={onChange}
                                className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="submit"
                        className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                        Save
                    </button>
                </div>
            </form>
            <hr className='m-5 bg-black h-[1.5px]' />
        </>
    )
}

export default UpdateProfile