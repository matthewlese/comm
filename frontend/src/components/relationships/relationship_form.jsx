import React, {useState} from "react";
import { withRouter } from "react-router";

const RelationshipForm = props => {
  let {currentUser} = props
  
  // const handleErrors = () => {
  //   return(
  //     <ul className='relationship error-list'>
  //       {props.errors.map((error, i) => (
  //         <li key={i}>{error}</li>
  //       ))}
  //     </ul>
  //   )
  // }


  const handleSubmit = e => {
    e.preventDefault()
    props.action({})
      .then(res => {
        props.history.push(`/relationships/${res.relationship._id}`)
      })
  }

  return(
    <div className='flex flex-wrap -mt-2 w-full mx-auto px-4'>
      {/* {handleErrors()} */}
      <div className="flex mt-7 min-h-[25rem] bg-white max-w-md px-4 mx-auto border-2 border-yellow-900 rounded-sm ">
        <div className="flex flex-wrap justify-between py-4 " >
          <form className='w-full '
            onSubmit={handleSubmit} 
            id='relationship-form'>
            {/* <input className="font-semibold text-2xl outline-0 w-full mb-3 border-b-2 border-yellow-900"
              type="text" 
              value={title} 
              onChange={update('title')} 
              placeholder="Title" /> */}
            <input type="submit" form='relationship-form' className='text-right cursor-pointer font-medium text-gray-600 hover:text-black hover:italic' value='Publish' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default withRouter(RelationshipForm)
