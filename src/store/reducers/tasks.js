import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const ADD = "ADD";
const DELETE = "DELETE";
const EDIT = "EDIT";
const DONE = "DONE";
const FETCH = "FETCH";

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
            text: action.text,
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
        countEdited: state.countEdited + 1,
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
    case FETCH: {
      return {
        ...state,
        items: [
          ...state.items,
          {
            text: action.text,
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

// export const handleEdit = (id, text) => {
//   return (dispatch) => {
//     return dispatch({ type: EDIT, id });
//   };
// };

// export const fetchData = () => {
//   return (dispatch) => {
//     axios.get(
//       "https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json"
//         .then((response) => response.json())
//         .then((data) => {
//           dispatch(
//             addItem([
//               ...items,
//               ...data.map((item) => {
//                 return {
//                   text: item.text.slice(0, 24),
//                   isDelete: false,
//                   isImportant: false,
//                   isDone: false,
//                   id: uuidv4(),
//                   backgroundColor: `${
//                     "#" + Math.floor(Math.random() * 16777215).toString(16)
//                   }`,
//                 };
//               }),
//             ])
//           );
//         })
//     );
//   };
// };
