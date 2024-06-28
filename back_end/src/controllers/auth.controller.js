import { User } from '../model/user.model.js'
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { deleteFromCloudinary, uploadOnCloudinary } from '../utils/cloudinary.js'

const createUser = async (req, res) => {
    let success = false
    // check weather the user with this email exist already
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ success, error: 'sorry a user with this email already exists' })
        }

        // add solt and hash password
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        // Create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })
        const data = {
            user: {
                id: user.id
            }
        }
        // creating auth token
        const authtoken = jwt.sign(data, process.env.JWT_SECRET)
        success = true
        res.json({ success, message: "signup successfull", authtoken, name: req.body.name })
    }
    // catch error if some external error occured
    catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
}

const login = async (req, res) => {
    let success = false
    const { email, password } = req.body;
    // check weather the user with this email exist 
    try {

        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ success, error: 'please try to login with correct credentials' })
        }
        const pass_compare = await bcrypt.compare(password, user.password)
        if (!pass_compare) {
            return res.status(400).json({ success, error: 'please try to login with correct credentials' })
        }
        const data = {
            user: {
                id: user.id
            }
        }
        // creating auth token
        const authtoken = jwt.sign(data, process.env.JWT_SECRET)
        success = true;
        res.json({ success, message: "login successfull", authtoken, name: user.name })
    }
    // catch error if some external error occured
    catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
}

const getUser = async (req, res) => {
    try {
        const userId = req.user.id
        let user = await User.findById(userId).select({
            "-password": "password",
            "-date": "date"
        })
        res.json(user)
    }
    // catch error if some external error occured
    catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
}

const google = async (req, res) => {
    const { name, email, profilePic } = req.body;
    let success = false
    try {
        const user = await User.findOne({ email });
        if (user) {
            const data = {
                user: {
                    id: user.id
                }
            }
            const authtoken = jwt.sign(data, process.env.JWT_SECRET);
            success = true
            return res.json({ success, message: "google login successfull", authtoken, user })
        } else {
            const generatePassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);

            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(generatePassword, salt);

            const newUser = await User.create({
                name,
                email,
                password: secPass,
                profilePic
            })
            const data = {
                newUser: {
                    id: newUser._id
                }
            }
            const authtoken = jwt.sign(data, process.env.JWT_SECRET)
            success = true;
            res.json({ success, message: "login successfull", authtoken, user })
        }

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
}

const changeProfileImage = async (req, res) => {
    const profilePicPath = req.file.path;
    console.log("profilePicpath", profilePicPath)

    let success = false
    try {
        if (!profilePicPath) {
            throw new ApiError(400, "Avatar file is missing");
        }

        const profilePic = await uploadOnCloudinary(profilePicPath);

        console.log("profilePic", profilePic);

        if (!profilePic) {
            throw new ApiError(400, "Error while uploading on avatar");
        }

        const user = await User.findById(req.user.id).select(
            "-password -refreshToken"
        );

        await deleteFromCloudinary(user.profilePic);

        user.profilePic = profilePic.url;
        await user.save({ validateBeforeSave: false });
        return res
            .status(200)
            .json({ message: "upload successful", user });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
}

export {
    createUser,
    login,
    google,
    getUser,
    changeProfileImage
}