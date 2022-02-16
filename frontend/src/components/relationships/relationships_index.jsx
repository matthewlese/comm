import React, {useEffect, useState} from 'react'
import RelationshipsIndexItem from './relationships_index_item'

function RelationshipsIndex(props) {
  useEffect(() => props.getAllRelationships(), [])

  return (
    <div className='mt-7 w-full'>
      <ul className='flex flex-wrap justify-center -mt-4 w-full mx-auto px-2'>
        {props.relationships.map((relationship, i) => (
          <RelationshipsIndexItem key={i} relationship={relationship}/>
        ))}
      </ul>
    </div>
  )
}

export default RelationshipsIndex
