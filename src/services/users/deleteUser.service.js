import { users } from "../../database";

const deleteUserService = (id) => {
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return "User not found";
  }

  users.splice(userIndex, 1);

  return "User deleted";
};

export default deleteUserService;
