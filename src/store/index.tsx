import { applyMiddleware, compose, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {};

const composeFunc =
  process.env.NODE_ENV === "development" ? composeWithDevTools : compose;

const composeEnhancers = composeFunc(applyMiddleware(thunk));

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer());

const store = legacy_createStore(
  persistedReducer,
  initialState,
  composeEnhancers
);

export const persistor = persistStore(store);

export default store;
