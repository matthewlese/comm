import React from 'react'
import RelationshipsIndexContainer from '../relationships/relationships_index_container'
import OpenInvitationsContainer from '../invitations/open_invitations_container'

function Home(props) {
  
  return (
    <div>
      <OpenInvitationsContainer />
      <RelationshipsIndexContainer />
    </div>
  )
}

export default Home