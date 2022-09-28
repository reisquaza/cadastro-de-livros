import { Router } from "express";
import { registerBookController } from "../controllers/books.controller";

const bookRoutes = Router();

bookRoutes.post("/:owner_id/books", registerBookController);

export default bookRoutes;
