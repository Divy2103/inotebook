import { Router } from "express";
import { fetchUser } from "../middleware/fetchUser.middleware.js";
import { createUser, login, google, getUser, updateProfile, changeProfileImage } from '../controllers/auth.controller.js'
import { upload } from '../middleware/multer.middleware.js';

const router = Router();

router.route('/createuser').post(createUser);

router.route('/login').post(login);

router.route('/google').post(google);

router.route('/getuser').get(fetchUser, getUser);

router.route("/updateProfile").put(fetchUser, updateProfile);

router.route("/changeProfileImage").patch(fetchUser, upload.single('file'), changeProfileImage);

export default router;