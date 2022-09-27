import * as bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { users } from "../../database";

const createUserService = async (name, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    email,
    name,
    password: hashedPassword,
    id: uuidv4(),
  };

  users.push(newUser);

  return newUser;
};

export default createUserService;
