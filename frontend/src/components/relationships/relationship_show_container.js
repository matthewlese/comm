import { connect } from "react-redux";
import RelationshipShow from "./relationship_show";
import { getRelationship, deleteRelationship } from "../../actions/relationship_actions";
import { createInvitation } from "../../actions/invitation_actions";

const mSTP = (state, {match}) => {
  const relationshipId = match.params.relationshipId
  let relationship = state.entities.relationships[relationshipId] || {}
  return({
    signedIn: state.session.isAuthenticated || state.session.isSignedIn,
    currentUser: state.session.user,
    relationship,
    relationshipId
  })
}

const mDTP = dispatch => ({
  getRelationship: relationshipId => dispatch(getRelationship(relationshipId)),
  deleteRelationship: relationshipId => dispatch(deleteRelationship(relationshipId)),
  createInvitation: invitation => dispatch(createInvitation(invitation)),
})

export default connect(mSTP, mDTP)(RelationshipShow)