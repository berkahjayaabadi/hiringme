import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { ProfileReducer } from "./reducer/ProfileWork";
import { CompanyReducer } from "./reducer/ProfileCmpny";
import { postProfileIdReducer } from "./reducer/ProfileWork";

const reducers = combineReducers({
  profileWorkers: ProfileReducer,
  postProfileWorkers: postProfileIdReducer,
  profileCompany: CompanyReducer,
});

const configureStore = () => {
  const store = createStore(reducers, applyMiddleware(thunk));
  return { store };
};

export default configureStore;
