import React, { useState, useEffect } from "react"
import { withRouter } from "react-router"

const RelationshipShow = props => {

  useEffect(() => {
    let {relationshipId, relationship, getRelationship, history} = props
    getRelationship(relationshipId)
      // .then(res => {

      // },
      //   err => history.push('/feed'))
  }, [])

  

  if (!props.relationship.members) { return null }

  return(
    <div className="w-full mx-auto px-4">
      <div className="mt-7 bg-white max-w-2xl px-4 mx-auto border-2 border-yellow-900 rounded-sm">
        <ul className="flex h-10 items-center justify-between">
          {
            props.relationship.members.map((member, i) => (
              <li key={i}>
                {member.username}
              </li>
            ))
          }
          <p>Add a partner</p>
        </ul>
      </div>
    </div>
  )
}

export default withRouter(RelationshipShow)