import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';

function InvitationShow(props) {
  const { invitationId, invitation, getInvitation, acceptInvitation, history } = props;

  useEffect(() => {
    getInvitation(invitationId)
  }, [])

  if (!invitation) { return null }

  return (
    <div className="w-full mx-auto px-4">
      <div className="flex items-center justify-between py-4 mt-7 bg-white max-w-2xl px-4 mx-auto border-2 border-yellow-900 rounded-sm">
        <div className='flex'>
          <h2 className='cursor-pointer hover:font-semibold mr-1'
            onClick={e => history.push(`/users/${invitation._inviter._id}`)}>{invitation._inviter.username}</h2>
          <h2>invited you to a relationship.</h2>
        </div>
        <button className='cursor-pointer hover:font-semibold mr-1'
          onClick={e => {
            acceptInvitation()
              .then(relationship => history.push(`/relationships/${relationship.id}`))
          }}>Accept</button>
      </div>
    </div>
  )
}

export default withRouter(InvitationShow)