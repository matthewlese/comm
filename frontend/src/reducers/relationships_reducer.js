import {
  RECEIVE_ALL_RELATIONSHIPS,
  RECEIVE_RELATIONSHIP,
  REMOVE_RELATIONSHIP
} from "../actions/relationship_actions";

const relationshipsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_RELATIONSHIP:
      nextState[action.relationship._id] = action.relationship;
      return nextState;
    case RECEIVE_ALL_RELATIONSHIPS:
      return action.relationships;
    case REMOVE_RELATIONSHIP:
      delete nextState[action.relationshipId]
      return nextState;
    default:
      return state;
  }
};

export default relationshipsReducer;