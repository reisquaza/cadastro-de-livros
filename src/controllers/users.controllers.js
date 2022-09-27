import createUserService from "../services/users/createUser.service";
import listUsersService from "../services/users/listUsers.service";

const createUserController = async (request, response) => {
  const { name, email, password } = request.body;

  const createdUser = await createUserService(name, email, password);

  return response.status(201).json(createdUser);
};

const listUsersController = (request, response) => {
  const listedUsers = listUsersService()

  return response.json(listedUsers)
};

export { createUserController, listUsersController };
