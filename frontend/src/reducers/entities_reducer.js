import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import relationshipsReducer from "./relationships_reducer";
import inviationsReducer from "./invitations_reducer";

export default combineReducers({
  users: UsersReducer,
  relationships: relationshipsReducer,
  invitations: inviationsReducer
})