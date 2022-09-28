import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import listUsersService from "../services/users/listUsers.service";
import updateUserSrvice from "../services/users/updateUser.service";

const createUserController = async (request, response) => {
  const { name, email, password } = request.body;

  const createdUser = await createUserService(name, email, password);

  return response.status(201).json(createdUser);
};

const listUsersController = (request, response) => {
  const listedUsers = listUsersService();

  return response.json(listedUsers);
};

const deleteUserController = (request, response) => {
  const { id } = request.params;

  const deletedUser = deleteUserService(id);

  return response.json(deletedUser);
};

const updateUserController = (request, response) => {
  try {
    const { id } = request.params;

    const user = request.body;

    const updatedUser = updateUserSrvice(id, user);

    return response.json(updatedUser);
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};

export {
  createUserController,
  listUsersController,
  deleteUserController,
  updateUserController,
};
