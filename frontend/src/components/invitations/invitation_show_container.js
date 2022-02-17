import { connect } from "react-redux";
import InvitationShow from "./invitation_show";
import { getInvitation } from "../../actions/invitation_actions";

const mSTP = (state, {match}) => {
  const invitationId = match.params.invitationId
  return {
    signedIn: state.session.isAuthenticated || state.session.isSignedIn,
    currentUser: state.session.user,
    invitationId,
    invitation: state.entities.invitations[invitationId] || {}
  }
}

const mDTP = dispatch => ({
  getInvitation: invitationId => dispatch(getInvitation(invitationId))
})

export default connect(mSTP, mDTP)(InvitationShow)