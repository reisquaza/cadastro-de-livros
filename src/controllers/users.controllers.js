import createUserService from "../services/users/createUser.service";

const createUserController = async (request, response) => {
  const { name, email, password } = request.body;

  const createdUser = await createUserService(name, email, password);

  return response.status(201).json(createdUser);
};

export { createUserController };
