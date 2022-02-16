import axios from 'axios'

export const showUsersRelationships = async (userId) => {
  const response = await axios.get(`/api/users/${userId}/relationships`)
  return response.data;
}

export const showRelationship = async (relationshipId) => {
  const response = await axios.get(`/api/relationships/${relationshipId}`)
  return response.data;
}

export const createRelationship = async (relationship) => {
  const response = await axios.post("/api/relationships", relationship);
  return response.data;
};

export const deleteRelationship = async (relationshipId) => {
  const response = await axios.delete(`/api/relationships/${relationshipId}/delete`)
  return response.data
}