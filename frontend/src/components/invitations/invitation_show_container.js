import { connect } from "react-redux";
import InvitationShow from "./invitation_show";
import { getInvitation, acceptInvitation } from "../../actions/invitation_actions";

const mSTP = (state, {match}) => {
  const invitationId = match.params.invitationId
  return {
    signedIn: state.session.isAuthenticated || state.session.isSignedIn,
    currentUser: state.session.user,
    invitationId,
    invitation: state.entities.invitations[invitationId]
  }
}

const mDTP = dispatch => ({
  getInvitation: invitationId => dispatch(getInvitation(invitationId)),
  acceptInvitation: invitationId => dispatch(acceptInvitation(invitationId))
})

export default connect(mSTP, mDTP)(InvitationShow)