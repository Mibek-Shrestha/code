import React from 'react'
import { useNavigate } from 'react-router-dom';
import NewMeeupForm from '../components/layout/NewMeeupForm'

const NewMeetup = () => {
  const navigate = useNavigate();
  const addMeetupHandler = (meetupData) => {
    fetch('https://refresh-c296b-default-rtdb.firebaseio.com/meetups.json',{
    method:'POST',
    body:JSON.stringify(meetupData),
    headers:{
      'Content-Type':'application/json'
    }
  }
  ).then(() => {
    navigate('/', { replace: true });
  });
  }

  return (
    <>
     <h1>Add New Meetup</h1>
    <NewMeeupForm onAddMeetup={addMeetupHandler}/>
    </>

  )
}

export default NewMeetup