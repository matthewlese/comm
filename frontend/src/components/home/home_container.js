import { connect } from "react-redux";
import Home from "./home";

const mSTP = state => {
  return({
    signedIn: state.session.isAuthenticated || state.session.isSignedIn,
    currentUser: state.session.user
  })
}

const mDTP = dispatch => ({
  
})

export default connect(mSTP, mDTP)(Home)