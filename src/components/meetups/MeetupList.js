import React from 'react'
import classes from './MeetupList.module.css'
import MeetupItem from './MeetupItem'
const MeetupList = (props) => {
  return (
    <div className={classes.list}>
        {props.meetups.map((meetup) =>
         <MeetupItem 
        key={meetup.id}
        image={meetup.image}
        title ={meetup.title}
        address = {meetup.address}
        description = {meetup.description}/>
        )}
    </div>
  )
}

export default MeetupList