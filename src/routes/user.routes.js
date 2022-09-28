import { Router } from "express";
import { registerBookController } from "../controllers/books.controller";

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

// userRoutes.post("/:id/books", registerBookController);

export default userRoutes;
