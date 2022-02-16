import axios from 'axios';

export const showInvitation = async (invitationId) => {
  const response = await axios.get(`/api/invitations/${invitationId}`)
  return response.data
}

export const createInvitation = async (invitation) => {
  const response = await axios.post(`/api/relationships/${invitation.relationshipId}/invitations`)
  return response.data
}