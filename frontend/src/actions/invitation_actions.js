import * as InvitationAPIUtil from '../util/invitation_api_util';

export const RECEIVE_ALL_INVITATIONS = 'RECEIVE_ALL_INVITATIONS';
export const RECEIVE_INVITATION = 'RECEIVE_INVITATION';
export const RECEIVE_INVITATION_ERRORS = 'RECEIVE_INVITATION_ERRORS';

export const receiveAllInvitations = invitations => ({
  type: RECEIVE_ALL_INVITATIONS,
  invitations
});

export const receiveInvitation = invitation => ({
  type: RECEIVE_INVITATION,
  invitation
});

export const receiveInvitationErrors = errors => ({
  type: RECEIVE_INVITATION_ERRORS,
  errors
});

export const getInvitation = invitationId => dispatch =>
  InvitationAPIUtil.showInvitation(invitationId)
    .then(invitation => dispatch(receiveInvitation(invitation)))
    .catch(err => dispatch(receiveInvitationErrors(err)))

export const getAllInvitations = userId => dispatch =>
  InvitationAPIUtil.showUsersInvitations(userId)
    .then(invitations => dispatch(receiveAllInvitations(invitations)))
    .catch(err => dispatch(receiveInvitationErrors(err)))

export const createInvitation = invitation => dispatch =>
  InvitationAPIUtil.createInvitation(invitation)
    .then(invitation => dispatch(receiveInvitation(invitation)))
    .catch(err => dispatch(receiveInvitationErrors(err)))