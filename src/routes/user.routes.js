import { Router } from "express";

import { createUserController } from "../controllers/users.controllers";
import verifyEmailAvailability from "../middlewares/verifyEmailAvailability.middleware";

const userRoutes = Router();

userRoutes.post("/", verifyEmailAvailability, createUserController);

export default userRoutes