import React, { useEffect } from 'react'

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

  console.log(invitations)
  
  return (
    <div className='w-full mx-auto px-4'>
      <div className='mt-7 bg-white max-w-2xl px-4 mx-auto border-2 border-yellow-900 rounded-sm'>
        <ul>
          {
            Object.keys(invitations).map((invitationKey, i) => (
              <li key={i}>
                <h3>{invitations[invitationKey].message}</h3>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default OpenInvitations