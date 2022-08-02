import { v4 as uuidv4 } from "uuid";

const arr = [];

export const fetchData = (e) => {
  e.preventDefault();
  const url =
    "https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      arr = [
        ...data.map((item) => {
          return {
            text: item.text.slice(0, 24),
            isDelete: false,
            isImportant: false,
            isDone: false,
            id: uuidv4(),
            backgroundColor: `${
              "#" + Math.floor(Math.random() * 16777215).toString(16)
            }`,
          };
        }),
      ];
    });
  return arr;
};
