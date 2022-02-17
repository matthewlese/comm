import React, {useEffect, useState} from 'react'
import RelationshipsIndexItem from './relationships_index_item'

function RelationshipsIndex(props) {
  const { getAllRelationships, relationships } = props;

  useEffect(() => getAllRelationships(props.currentUser._id), []);

  if (relationships.length === 0) {
    return(
      <div className='w-full mx-auto px-4'>
        <div className='mt-7 bg-white max-w-2xl px-4 py-2 mx-auto border-2 border-yellow-900 rounded-sm'>
          You aren't in any relationships.
        </div>
      </div>
    )
  }
  
  return (
    <div className='mt-7 w-full'>
      <ul className='flex flex-wrap justify-center -mt-4 w-full mx-auto px-2'>
        {relationships.map((relationship, i) => (
          <RelationshipsIndexItem key={i} relationship={relationship}/>
        ))}
      </ul>
    </div>
  )
}

export default RelationshipsIndex
