import React from 'react'
import {  Route ,Routes} from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import Layout from './components/layout/Layout';


const App = () => {
  return (
    <Layout>
  
       
    <Routes>
        <Route exact path="/" element={<AllMeetups />} />
         <Route exact path="/favorites" element={<Favorites/>} />
          <Route exact path="/newMeetup" element={<NewMeetup/>} />
      </Routes>
      
    </Layout>
    
  )
}

export default App;