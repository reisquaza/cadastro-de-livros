import express from "express";
import bookRoutes from "./routes/book.routes";
import userRouter from "./routes/user.routes";

const app = express();

app.use(express.json());

app.use("/users", userRouter);

app.use("/users", bookRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listen in port ${PORT}`);
});
