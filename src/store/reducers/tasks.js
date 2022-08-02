import { v4 as uuidv4 } from "uuid";
// import { applyMiddleware } from "redux";

// import axios from "axios";

const ADD = "ADD";
const DELETE = "DELETE";
const EDIT = "EDIT";
const DONE = "DONE";
const FETCH = "FETCH";
const CANCEL = "CANCEL";
const CLEAR = "CLEAR";
const SAVE_EDIT = "SAVE_EDIT";

const initialState = {
  items: [
    {
      text: "Go for a walk",
      isDelete: false,
      isImportant: false,
      isDone: false,
      id: uuidv4(),
      backgroundColor: `${
        "#" + Math.floor(Math.random() * 16777215).toString(16)
      }`,
    },
  ],
  countCreated: 0,
  countEdited: 0,
  countDeleted: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      return {
        ...state,
        items: [
          ...state.items,
          {
            text: action.text.slice(0, 24),
            isDelete: false,
            isEdit: false,
            isImportant: false,
            isDone: false,
            id: uuidv4(),
            backgroundColor: `${
              "#" + Math.floor(Math.random() * 16777215).toString(16)
            }`,
          },
        ],
        countCreated: state.countCreated + 1,
      };
    }
    case EDIT: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              text: action.text || item.text,
              isEdit: !item.isEdit,
            };
          }
          return item;
        }),
      };
    }
    case SAVE_EDIT: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              text: action.text || item.text,
              isEdit: !item.isEdit,
            };
          }
          return item;
        }),
        countEdited: state.countEdited + 1,
      };
    }
    case CANCEL: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              text: action.text || item.text,
              isEdit: !item.isEdit,
            };
          }
          return item;
        }),
      };
    }
    case DELETE: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
        countDeleted: state.countDeleted + 1,
      };
    }
    case DONE: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return { ...item, isDone: !item.isDone };
          }
          return item;
        }),
        countDeleted: state.countDeleted + 1,
      };
    }
    case CLEAR: {
      return {
        ...state,
        items: [],
      };
    }

    case FETCH: {
      const url =
        "https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json";

      async function getData() {
        const response = await fetch(url);
        const data = await response.json();
        const arr = data.map((item) => {
          return {
            text: item.text.slice(0, 24),
            isDelete: false,
            isEdit: false,
            isImportant: false,
            isDone: false,
            id: uuidv4(),
            backgroundColor: `${
              "#" + Math.floor(Math.random() * 16777215).toString(16)
            }`,
          };
        });
        console.log(arr);
      }
      getData();

      return {
        ...state,
        items: [...state.items],
        countCreated: state.countCreated + 1,
      };
    }

    default:
      return state;
  }
};

export const addItem = (text) => {
  return (dispatch) => {
    return dispatch({ type: ADD, text });
  };
};

export const deleteItem = (id) => {
  return (dispatch) => {
    return dispatch({ type: DELETE, id });
  };
};

export const doDone = (id) => {
  return (dispatch) => {
    return dispatch({ type: DONE, id });
  };
};

export const editItem = (id, text) => {
  return (dispatch) => {
    return dispatch({ type: EDIT, id, text });
  };
};

export const saveEdit = (id, text) => {
  return (dispatch) => {
    return dispatch({ type: SAVE_EDIT, id, text });
  };
};

export const cancelEditItem = (id, text) => {
  return (dispatch) => {
    return dispatch({ type: CANCEL, id, text });
  };
};

export const clearTodoList = () => {
  return (dispatch) => {
    return dispatch({ type: CLEAR });
  };
};

export const fetchData = () => {
  return (dispatch) => {
    return dispatch({ type: FETCH });
  };
};

// export const fetchData = async function () {
//   const response = await fetch(
//     "https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json"
//   );
//   const data = await response.json();
//   const arr = data.map((item) => {
//     return {
//       text: item.text.slice(0, 24),
//       isDelete: false,
//       isEdit: false,
//       isImportant: false,
//       isDone: false,
//       id: uuidv4(),
//       backgroundColor: `${
//         "#" + Math.floor(Math.random() * 16777215).toString(16)
//       }`,
//     };
//   });
//   return arr;
// };

// export const fetchData = () => {
//   return (dispatch) => {
//     return dispatch({ type: FETCH });
//   };
// };

// export const fetchData = () => {
//   return (dispatch) => {
//     axios
//       .get(
//         "https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json"
//       )
//       .then((response) => {
//         const todos = response.data;
//       })
//       .catch((error) => {
//         const errorMsg = error.message;
//       });
//   };
// };

// .then((data) => {
//       data.map((item) => {
//         return {
//           text: item.text.slice(0, 24),
//           isDelete: false,
//           isEdit: false,
//           isImportant: false,
//           isDone: false,
//           id: uuidv4(),
//           backgroundColor: `${
//             "#" + Math.floor(Math.random() * 16777215).toString(16)
//           }`,
//         };
//   };
// };

// const fetched = (e) => {
//   e.preventDefault();
//   let url =
//     "https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json";
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       data.map((item) => {
//         return {
//           text: item.text.slice(0, 24),
//           isDelete: false,
//           isEdit: false,
//           isImportant: false,
//           isDone: false,
//           id: uuidv4(),
//           backgroundColor: `${
//             "#" + Math.floor(Math.random() * 16777215).toString(16)
//           }`,
//         };
//       });
//     });
// };
