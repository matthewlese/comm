import { connect } from "react-redux";
import RelationshipsIndex from "./relationships_index";
import { getAllRelationships } from "../../actions/relationship_actions";

const mSTP = state => ({
  currentUser: state.session.user,
  signedIn: state.session.isAuthenticated,
  relationships: Object.values(state.entities.relationships) || []
})

const mDTP = dispatch => ({
  getAllRelationships: () => dispatch(getAllRelationships())
})

export default connect(mSTP, mDTP)(RelationshipsIndex)