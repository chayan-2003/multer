import express from "express";
import {auth} from "../controller/auth.js";
 
const router = express.Router();
router.post("/",auth);
export default router;