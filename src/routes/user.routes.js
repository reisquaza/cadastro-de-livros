import { Router } from "express";

import {
  createUserController,
  deleteUserController,
  listUsersController,
} from "../controllers/users.controllers";
import verifyEmailAvailability from "../middlewares/verifyEmailAvailability.middleware";

const userRoutes = Router();

userRoutes.post("/", verifyEmailAvailability, createUserController);

userRoutes.get("/", listUsersController);

userRoutes.delete("/:id", deleteUserController);

export default userRoutes;
