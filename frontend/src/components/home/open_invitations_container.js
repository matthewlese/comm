import { connect } from "react-redux";
import OpenInvitations from "./open_invitations";
import { getAllInvitations } from "../../actions/invitation_actions";

const mSTP = state => {
  return({
    signedIn: state.session.isAuthenticated || state.session.isSignedIn,
    currentUser: state.session.user,
    invitations: state.entities.invitations || {}
  })
}

const mDTP = dispatch => ({
  getAllInvitations: userId => dispatch(getAllInvitations(userId))
})

export default connect(mSTP, mDTP)(OpenInvitations)