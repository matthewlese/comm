import * as RelationshipAPIUtil from '../util/relationship_api_util'

export const RECEIVE_ALL_RELATIONSHIPS = 'RECEIVE_ALL_RELATIONSHIPS'
export const RECEIVE_RELATIONSHIP = 'RECEIVE_RELATIONSHIP'
export const RECEIVE_RELATIONSHIP_ERRORS = 'RECEIVE_RELATIONSHIP_ERRORS'
export const REMOVE_RELATIONSHIP = 'REMOVE_RELATIONSHIP'

export const receiveAllRelationships = relationships => ({
  type: RECEIVE_ALL_RELATIONSHIPS,
  relationships
})

export const receiveRelationship = relationship => ({
  type: RECEIVE_RELATIONSHIP,
  relationship
})

export const receiveErrors = errors => ({
  type: RECEIVE_RELATIONSHIP_ERRORS,
  errors
})

export const removeRelationship = relationshipId => ({
  type: REMOVE_RELATIONSHIP,
  relationshipId
})

export const getRelationship = relationshipId => dispatch =>
  RelationshipAPIUtil.showRelationship(relationshipId)
    .then(relationship => dispatch(receiveRelationship(relationship)))
    .catch(err => dispatch(receiveErrors(err)))

export const getAllRelationships = userId => dispatch =>
  RelationshipAPIUtil.showUsersRelationships(userId)
    .then(relationships => dispatch(receiveAllRelationships(relationships)))
    .catch(err => dispatch(receiveErrors(err)))
    
export const createRelationship = relationship => dispatch =>
  RelationshipAPIUtil.createRelationship(relationship)
    .then(relationship => dispatch(receiveRelationship(relationship)))
    .catch(err => dispatch(receiveErrors(err)))

export const deleteRelationship = relationshipId => dispatch =>
  RelationshipAPIUtil.deleteRelationship(relationshipId)
    .then(() => dispatch(removeRelationship(relationshipId)))
    .catch(err => dispatch(receiveErrors(err)))