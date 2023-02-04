import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { editProfileIdReducer } from "./reducer/ProfileWork";
import { editCompanyReducer } from "./reducer/ProfileCmpny";

const reducers = combineReducers({
  profileWorkers: editProfileIdReducer,
  profileCompany: editCompanyReducer,
});

const configureStore = () => {
  const store = createStore(reducers, applyMiddleware(thunk));
  return { store };
};

export default configureStore;
