import { Router } from "express";

import {
  createUserController,
  listUsersController,
} from "../controllers/users.controllers";
import verifyEmailAvailability from "../middlewares/verifyEmailAvailability.middleware";

const userRoutes = Router();

userRoutes.post("/", verifyEmailAvailability, createUserController);

userRoutes.get("/", listUsersController);

export default userRoutes;
