import { connect } from "react-redux";
import RelationshipForm from "./relationship_form";
import { createRelationship } from "../../actions/relationship_actions";

const mSTP = state => {
  const currentUser = state.session.user
  return ({
    currentUser,
    formType: 'Create Relationship',
    errors: state.errors.relationship
  })
}

const mDTP = dispatch => ({
  action: relationship => dispatch(createRelationship(relationship)),
  // clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(RelationshipForm)