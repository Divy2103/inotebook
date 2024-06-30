import React, { useContext, useEffect, useState, useRef } from 'react'
import axios from 'axios'
function ProfileImage({ user,showAlert }) {
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

        } catch (error) {
            console.log(error);
            showAlert("error occured", "danger");
        }

    }

    const handleClick = (e) => {
        e.preventDefault();
        ref.current.click();
    }

    return (
        <div className='shadow-md p-5 w-4/12 max-h-96'>
            <div className='flex flex-col justify-center items-center'>
                <form id="form">
                    <button
                        type='submit'
                        onClick={handleClick}>
                        <img src={profileImage} alt="avatar" className='w-60 h-60 rounded-full bg-center cursor-pointer hover:opacity-70 delay-300 border border-black' />
                    </button>
                    <input 
                    type="file" 
                    name="profilePic" 
                    id='file' 
                    hidden
                    onChange={handleImageUpload} ref={ref} />
                </form>
                    <h1 className='mt-3 text-xl font-bold'>{user.name}</h1>
            </div>
        </div>
    )
}

export default ProfileImage