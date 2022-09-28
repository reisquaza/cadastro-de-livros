import { books } from "../../database";
import { v4 as uuidv4 } from "uuid";

const registerBookService = (title, author, year, owner_id) => {
  const newBook = {
    title,
    author,
    year,
    owner_id,
    id: uuidv4(),
  };

  books.push(newBook);

  return newBook;
};

export default registerBookService;
