import React, { useState, useEffect } from 'react';

function InvitationShow(props) {
  const { invitationId, invitation, getInvitation } = props;
  
  useEffect(() => {
    getInvitation(invitationId)
  }, [])

  return (
    <div>InvitationShow</div>
  )
}

export default InvitationShow