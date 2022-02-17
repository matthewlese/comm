import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import '../index.css'
import HeaderContainer from '../components/header/header_container'
import Modal from '../components/modal/modal_container'
import CreateRelationshipFormContainer from '../components/relationships/create_relationship_form_container'
import RelationshipShowContainer from './relationships/relationship_show_container';
// import RelationshipsIndexContainer from '../components/relationships/relationships_index_container'
import HomeContainer from './home/home_container';

const App = () => {
  return(
  <div id='app' className='min-h-screen bg-yellow-700 bg-opacity-40'>
    <HeaderContainer />
    <div className='flex flex-col justify-between min-h-[95vh]'>
      <div className='relative pb-6 overflow-hidden'>
        <Switch>
          {/* <ProtectedRoute exact path='/' component={RelationshipsIndexContainer}/> */}
          <ProtectedRoute exact path='/' component={HomeContainer}/>
          <ProtectedRoute exact path='/relationships/create' component={CreateRelationshipFormContainer}/>
          <ProtectedRoute path='/relationships/:relationshipId' component={RelationshipShowContainer}/>
        </Switch>
      </div>
      <footer className='bg-yellow-900 relative bottom-0 h-20 w-screen'>
        <div className='flex justify-between max-w-6xl mx-auto px-4'>
          <div className='flex-shrink-0 w-64 mx-auto text-center '>
            <h3 className='text-white text-opacity-70 italic font-light mt-3'>More from Matthew Lese</h3>
            <div className='inline-flex mx-auto mt-2'>
              <a href="https://github.com/matthewlese" className='mr-3'>
                <div className='text-white text-opacity-70 font-light cursor-pointer hover:italic'>GitHub</div>
              </a>
              <a href="https://www.linkedin.com/in/matthewlese/" className='linkedin-link'>
                <div className='text-white text-opacity-70 font-light cursor-pointer hover:italic'>LinkedIn</div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    <Modal />
  </div>
  )
}

export default App