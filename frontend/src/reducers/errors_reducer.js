import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
// import likeErrorsReducer from './like_errors_reducer'
// import commentErrorsReducer from "./comment_errors_reducer";
import relationshipErrorsReducer from "./relationship_errors_reducer";

export default combineReducers({
  session: sessionErrorsReducer,
  relationship: relationshipErrorsReducer
})