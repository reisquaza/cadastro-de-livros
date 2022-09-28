import { Router } from "express";

import {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
} from "../controllers/users.controllers";
import verifyEmailAvailability from "../middlewares/verifyEmailAvailability.middleware";

const userRoutes = Router();

userRoutes.post("/", verifyEmailAvailability, createUserController);

userRoutes.get("/", listUsersController);

userRoutes.delete("/:id", deleteUserController);

userRoutes.patch("/:id", updateUserController);

export default userRoutes;
