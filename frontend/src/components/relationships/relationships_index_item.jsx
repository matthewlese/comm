import React from 'react'
import { withRouter } from 'react-router'

function RelationshipsIndexItem(props) {
  let { relationship, history } = props
  return (
    <div className='px-4 w-[30rem] mt-2 cursor-pointer' onClick={() => history.push(`/relationships/${relationship._id}`)}>
      <div className='bg-white px-4 py-3 border-2 h-full border-yellow-900 rounded-sm'>
        <div className='flex justify-between items-center my-2'>
          <ul className='flex'>
            {
              relationship._members.map((member, i) => (
                <li key={i}>
                  <h3>{member.username}</h3>
                </li>
              ))
            }
          </ul>
          <p>{relationship.authorName}</p>
        </div>
      </div>
    </div>
  )
}

export default withRouter(RelationshipsIndexItem)
