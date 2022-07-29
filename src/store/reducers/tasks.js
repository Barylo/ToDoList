import { v4 as uuidv4 } from "uuid";

const ADD = "ADD";
const DELETE = "DELETE";
// const EDIT = "EDIT";
const DONE = "DONE";

const initialState = {
  items: [
    {
      text: "Go for a walk",
      isDelete: false,
      isImportant: false,
      isDone: false,
      id: uuidv4(),
    },
  ],
  countAdded: 0,
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
            isImportant: false,
            isDone: false,
            id: uuidv4(),
          },
        ],
        countAdded: state.countAdded + 1,
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
