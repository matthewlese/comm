import { DISPLAY_MODAL, HIDE_MODAL } from "../actions/modal_actions";

const modalReducer = (state=null, action) => {
  switch (action.type) {
    case DISPLAY_MODAL:
      return action.modal
    case HIDE_MODAL:
      return null
    default:
      return state
  }
}

export default modalReducer