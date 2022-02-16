import axios from 'axios'

export const showAllRelationships = async () => {
  const response = await axios.get('/api/relationships')
  return response.data;
}

export const showRelationship = async (relationshipId) => {
  const response = await axios.get(`/api/relationships/${relationshipId}`)
  return response.data;
}

export const createRelationship = async (relationship) => {
  const response = await axios.post("/api/relationships/create", relationship);
  return response.data;
};

export const deleteRelationship = async (relationshipId) => {
  const response = await axios.delete(`/api/relationships/${relationshipId}/delete`)
  return response.data
}