import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import relationshipsReducer from "./relationships_reducer";
// import CommentsReducer from './comments_reducer'
// import FollowsReducer from "./follows_reducer";
// import LikesReducer from "./likes_reducer";

export default combineReducers({
  users: UsersReducer,
  relationships: relationshipsReducer,
  // comments: CommentsReducer,
  // follows: FollowsReducer,
  // likes: LikesReducer
})