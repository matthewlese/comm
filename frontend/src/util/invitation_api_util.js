import axios from 'axios';

export const showInvitation = async (invitationId) => {
  const response = await axios.get(`/api/invitations/${invitationId}`);
  return response.data;
}

export const showUsersInvitations = async (userId) => {
  const response = await axios.get(`/api/users/${userId}/invitations`);
  return response.data;
}

export const createInvitation = async (invitation) => {
  const response = await axios.post(`/api/relationships/${invitation.relationshipId}/invitations`, invitation);
  return response.data;
}

export const acceptInvitation = async (invitationId) => {
  const response = await axios.patch(`/api/invitations/${invitationId}/accept`);
  return response.data;
}