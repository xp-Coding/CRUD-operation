import express from "express"
import { createUser, deleteUser, readUser, updateUser } from "../controllers/userController.js"

const router = express.Router()

//create
router.post("/abc", createUser )

//read
router.get("/abc", readUser)


router.put("/abc/:id", updateUser)


router.delete("/abc/:id", deleteUser)


export default router;
