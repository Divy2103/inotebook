import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app} from '../firebase'
import { useNavigate } from 'react-router-dom'

function Oauth(props) {

    const auth = getAuth(app);
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: "select_account" });
        try {
            const result = await signInWithPopup(auth, provider);
            const res = await fetch("http://localhost:4000/api/auth/google", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    profilePic: result.user.photoURL
                })
            })
            console.log("hello how are you")
            const data = await res.json();
            if (data.success) {
                // Save the authtoken and redirect
                localStorage.setItem('token',data.authtoken)
                localStorage.setItem("username",data.name)
                navigate("/");
                // props.showAlert("Logged In successfully","Success")
            }
            else{
                // props.showAlert("Invalid Credintials","Error")
            }
        } catch (error) {
            console.log("error in google login", error);
        }
    }

    return (
        <div>
            <button type="button" onClick={handleGoogleLogin}
                className="mt-2 w-full text-white bg-gray-600 hover:bg-gray-700 font-medium rounded-lg text-lg tracking-wide px-5 py-2.5 text-center flex justify-center space-x-5 items-center">
                <FcGoogle className="" size={30} />
                <span>
                    Sign in with google
                </span>
            </button>
        </div>
    )
}

export default Oauth