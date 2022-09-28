import registerBookService from "../services/books/registerBook.service";

const registerBookController = (request, response) => {
  const { owner_id } = request.params;

  const { title, author, year } = request.body;

  const registeredBook = registerBookService(title, author, year, owner_id);

  return response.status(201).json(registeredBook);
};

export { registerBookController };
