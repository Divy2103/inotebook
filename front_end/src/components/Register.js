import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <>
            <main className="flex mt-5">
                <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
                    <div className="relative">
                        <h1 className="text-center  text-3xl font-medium tracking-tight text-gray-900">Register</h1>
                        <p className="mt-3 text-center text-lg text-gray-600">
                            Already registered?{'  '}
                            <Link to="/login" className="text-gray-700 hover:underline font-medium">
                                Login
                            </Link>
                        </p>
                    </div>
                    <div className=" mt-10 flex-auto bg-white shadow-2xl sshadow-gray-900/10 sm:mx-0 sm:flex-none px-20 py-10 rounded-[2.5rem]">
                        <form>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="mb-2 block text-xl font-normal text-black">Name</label>
                                    <input id="name" type="text" name="name" className="block w-full appearance-none rounded-lg border border-gray-200 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-gray-500 focus:outline-none text-sm" autoComplete="name"
                                        placeholder="Enter Your Name" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="mb-2 block text-xl font-normal text-black">Email</label>
                                    <input id="email" type="email" name="email" className="block w-full appearance-none rounded-lg border border-gray-200 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-gray-500 focus:outline-none text-sm" autoComplete="email"
                                        placeholder="Enter Your Email" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="mb-2 block text-xl font-normal text-black">Password</label>
                                    <input id="password" type="password" name="password" className="block w-full appearance-none rounded-lg border border-gray-200 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-gray-500 focus:outline-none text-sm" autoComplete="Password"
                                        placeholder="Enter Your Password" required />
                                </div>
                                <div>
                                    <label htmlFor="cpassword" className="mb-2 block text-xl font-normal text-black">Confirm Password</label>
                                    <input id="cpassword" type="password" name="cpassword" className="block w-full appearance-none rounded-lg border border-gray-200 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-gray-500 focus:outline-none text-sm" autoComplete="Password"
                                        placeholder="Confirm Your Password" required />
                                </div>

                            </div>

                            <button type="submit"
                                className="mt-10 w-full text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-lg tracking-wide px-5 py-2.5 text-center">Register</button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Register