import React, { useEffect } from 'react'
import {withRouter} from 'react-router';

function OpenInvitations(props) {
  const { currentUser, getAllInvitations, invitations } = props;

  useEffect(() => {
    getAllInvitations(currentUser.id)
  }, [])

  if (Object.keys(invitations).length === 0) {
    return(
      <div className='w-full mx-auto px-4'>
        <div className='mt-7 bg-white max-w-2xl px-4 py-2 mx-auto border-2 border-yellow-900 rounded-sm'>
          You don't have any open invitations.
        </div>
      </div>
    )
  }
  
  return (
    <div className='w-full mx-auto px-4'>
      <div className='mt-7 bg-white max-w-2xl px-4 mx-auto border-2 border-yellow-900 rounded-sm'>
        <ul className='py-2'>
          {
            Object.keys(invitations).map((invitationKey, i) => {
              const invitation = invitations[invitationKey];
              return (
                <li key={i}
                  className='cursor-pointer hover:font-semibold'
                  onClick={e => props.history.push(`/invitations/${invitation._id}`)}>
                  <h3>{invitation._inviter.username + ': ' + invitation.message}</h3>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default withRouter(OpenInvitations)