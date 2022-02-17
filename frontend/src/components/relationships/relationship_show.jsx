import React, { useState, useEffect } from "react"
import { withRouter } from "react-router"

const RelationshipShow = props => {
  const [inviting, setInviting] = useState(false)
  const [usernameToSearch, setUsernameToSearch] = useState('')
  const [message, setMessage] = useState('')

  const { relationship, relationshipId, createInvitation, getRelationship } = props;

  useEffect(() => {
    getRelationship(relationshipId)
  }, [getRelationship, relationshipId])

  const invitePartner = () => {
    return !inviting ?
      <p onClick={e => setInviting(true)}>Add a partner</p>
      : 
      <div >
        <div className="flex">
          <input type="text"
            onChange={e => setUsernameToSearch(e.target.value)}
            value={usernameToSearch}
            placeholder='username'/>
          <button className="mr-1"
            onClick={e => sendInvitation()}>Send</button>
          <button className="cursor-pointer font-semibold text-red-700"
            onClick={e => setInviting(false)}>Cancel</button>
        </div>
        <input type="text"
          onChange={e => setMessage(e.target.value)}
          value={message}
          placeholder='Send a message'/>
      </div>
  }

  const sendInvitation = () => {
    createInvitation({
      relationshipId: relationship._id,
      inviteeUsername: usernameToSearch,
      message
    })
  }

  if (!relationship._members) { return null }

  return(
    <div className="w-full mx-auto px-4">
      <div className="flex items-center justify-between py-4 mt-7 bg-white max-w-2xl px-4 mx-auto border-2 border-yellow-900 rounded-sm">
        <ul className="items-center justify-between">
          {
            relationship._members.map((member, i) => (
              <li key={i}>
                {member.username}
              </li>
            ))
          }
        </ul>
        {invitePartner()}
      </div>
    </div>
  )
}

export default withRouter(RelationshipShow)