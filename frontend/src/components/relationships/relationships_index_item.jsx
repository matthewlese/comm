import React from 'react'
import { withRouter } from 'react-router'

function RelationshipsIndexItem(props) {
  let { relationship, history } = props
  let truncatedBody = relationship.body.split('. ')[0] + '...'
  return (
    <div className='px-4 w-[30rem] mt-2 cursor-pointer' onClick={() => history.push(`/relationships/${relationship._id}`)}>
      <div className='bg-white px-4 py-3 border-2 h-full border-yellow-900 rounded-sm'>
        <div className='flex justify-between items-center my-2'>
          <h2 className='text-xl font-bold'>{relationship.title}</h2>
          <p>{relationship.authorName}</p>
        </div>
        <p className='w-full'>{truncatedBody}</p>
      </div>
    </div>
  )
}

export default withRouter(RelationshipsIndexItem)
