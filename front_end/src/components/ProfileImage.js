import React, { useContext, useEffect, useState, useRef } from 'react'
import axios from 'axios'
function ProfileImage({ user }) {
    const hostName = "http://localhost:4000"
    const ref = useRef();
    // const context = useContext(NoteContext);
    // const { user } = context;
    const [profileImage, setProfileImage] = useState('');
    useEffect(() => {
        setProfileImage(user.profilePic);
    }, [user.profilePic])

    const handleImageUpload = async (e) => {
        setProfileImage(URL.createObjectURL(e.target.files[0]));

        const uploadFile = ref.current.files[0];
        console.log(uploadFile);
        const formData = new FormData();
        formData.append("file", uploadFile);
        try {

            const response = await axios.patch(`${hostName}/api/auth/changeProfileImage`,
                formData,
                {
                    headers: {
                        "Content-Type": "form-data",
                        "auth-token": localStorage.getItem('token')
                    }
                }
            );

            // const json = await response.json();
            // console.log("json in image", json);
        } catch (error) {

        }

    }

    const handleClick = (e) => {
        e.preventDefault();
        ref.current.click();
    }

    return (
        <div className='shadow-md p-5 w-4/12'>
            <div className='flex flex-col items-center'>
                <form id="form">
                    <button
                        type='submit'
                        onClick={handleClick}>
                        <img src={profileImage} alt="avatar" className='w-48 h-48 rounded-full bg-center cursor-pointer hover:opacity-70 delay-300' />
                    </button>
                    <input 
                    type="file" 
                    name="profilePic" 
                    id='file' 
                    hidden
                    onChange={handleImageUpload} ref={ref} />
                    <h1 className='m-2 text-xl font-bold'>{user.name}</h1>
                </form>
            </div>
        </div>
    )
}

export default ProfileImage