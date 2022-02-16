import { connect } from "react-redux";
import RelationshipForm from "./relationship_form";
import { createRelationship } from "../../actions/relationship_actions";

const mSTP = state => {
  const author = state.session.user
  const currentUserId = author.id
  return ({
    author,
    currentUserId,
    formType: 'Create Relationship',
    errors: state.errors.relationship
  })
}

const mDTP = dispatch => ({
  action: relationship => dispatch(createRelationship(relationship)),
  // clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(RelationshipForm)