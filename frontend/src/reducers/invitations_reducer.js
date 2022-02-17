import {
  RECEIVE_ALL_INVITATIONS,
  RECEIVE_INVITATION
} from "../actions/invitation_actions";

const inviationsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    // case RECEIVE_INVITATION:
    //   nextState[action.relationship._id] = action.relationship;
    //   return nextState;
    case RECEIVE_ALL_INVITATIONS:
      return action.invitations;
    default:
      return {};
  }
};

export default inviationsReducer;