import React, { useState } from 'react'

function ChangePassword(props) {
  const hostName = "http://localhost:4000";
  const [credentials, setCredentials] = useState({ oldPassword: '', newPassword: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${hostName}/api/auth/changePassword`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ oldPass: credentials.oldPassword, newPass: credentials.newPassword })
    })
    const data = await response.json();
    console.log("data",data.success);
    console.log("data after change password", data);
    if (data.success) {
      props.showAlert("password Changed", "Success");
    } else {
      props.showAlert("password not match", "Error");
    }
    setCredentials({ oldPassword: '', newPassword: '' });
  }

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl my-16 xl:mx-auto mx-7">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Change Password
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="oldPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Old Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="oldPassword"
                  id="oldPassword"
                  value={credentials.oldPassword}
                  onChange={handleChange}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 font-extrabold"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                New Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  autoComplete="family-name"
                  value={credentials.newPassword}
                  onChange={handleChange}
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 font-extrabold"
                />
              </div>
            </div>
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
  )
}

export default ChangePassword