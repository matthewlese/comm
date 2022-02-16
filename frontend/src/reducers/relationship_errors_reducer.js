import { RECEIVE_RELATIONSHIP, RECEIVE_ALL_RELATIONSHIPS, RECEIVE_RELATIONSHIP_ERRORS } from "../actions/relationship_actions";

const relationshipErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RELATIONSHIP_ERRORS:
      return action.errors;
    case RECEIVE_RELATIONSHIP:
      return [];
    case RECEIVE_ALL_RELATIONSHIPS:
      return [];
    default:
      return state;
  }
};

export default relationshipErrorsReducer;