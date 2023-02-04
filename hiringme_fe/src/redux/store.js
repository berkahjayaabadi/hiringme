import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { editProfileIdReducer } from "./reducer/ProfileWork";
import { editCompanyReducer } from "./reducer/ProfileCmpny";
import { postProfileIdReducer } from "./reducer/ProfileWork";

const reducers = combineReducers({
  profileWorkers: editProfileIdReducer,
  postProfileWorkers: postProfileIdReducer,
  profileCompany: editCompanyReducer,
});

const configureStore = () => {
  const store = createStore(reducers, applyMiddleware(thunk));
  return { store };
};

export default configureStore;
