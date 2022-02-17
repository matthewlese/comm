import {
  RECEIVE_ALL_INVITATIONS,
  RECEIVE_INVITATION
} from "../actions/invitation_actions";

const inviationsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_INVITATION:
      nextState[action.invitation._id] = action.invitation;
      return nextState;
    case RECEIVE_ALL_INVITATIONS:
      action.invitations.forEach(invitation => nextState[invitation._id] = invitation)
      return nextState;
    default:
      return nextState;
  }
};

export default inviationsReducer;