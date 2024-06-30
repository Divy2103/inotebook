import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';
import ChangePassword from './ChangePassword';
import ProfileImage from './ProfileImage';
import UpdateProfile from './UpdateProfile';
function Profile(props) {

    const context = useContext(NoteContext);
    const { user } = context;
    return (
        <div className='w-full min-h-screen flex space-x-5 justify-center'>
            <ProfileImage user={user} showAlert={props.showAlert} />
            <div className='shadow-md p-5 w-7/12'>
                <UpdateProfile user={user} showAlert={props.showAlert} />
                <ChangePassword showAlert={props.showAlert} />
            </div>
        </div >
    )
}

export default Profile