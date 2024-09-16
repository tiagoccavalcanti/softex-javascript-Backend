import express from "express";
export const router = express.Router();
import { users } from "../models/user.js";
import { getAllUsers , getUsersById } from "../constrollers/user-controllesrs.js";


router.get("/", getAllUsers);

router.get("/:id/", getUsersById);