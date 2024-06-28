import { Router } from "express";
import { fetchUser } from "../middleware/fetchUser.middleware.js";
import { fetchAllNotes, addNote, upldateNote, deleteNote } from '../controllers/notes.controller.js'

const router = Router();

router.route('/fetchallnotes').get(fetchUser, fetchAllNotes);

router.route('/addnote').post(fetchUser, addNote);

router.route('/updatenote/:id').put(fetchUser, upldateNote);

router.route('/deletenote/:id').delete(fetchUser, deleteNote);

export default router;