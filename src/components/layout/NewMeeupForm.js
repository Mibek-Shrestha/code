import React,{useRef} from 'react'
import classes from './NewMeetupForm.module.css';
import Card from '../UI/Card'
const NewMeeupForm = (props) => {
    const titleRef = useRef();  
    const imageRef = useRef();
    const addressRef = useRef();
    const descriptionRef = useRef();
    
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredTitle = titleRef.current.value;
        const enteredImage = imageRef.current.value;
        const enteredAddress = addressRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const meetupData = {
            title:enteredTitle,
            image:enteredImage,
            address:enteredAddress,
            description:enteredDescription
        }
        
        props.onAddMeetup(meetupData);

    
    }
  return <Card>
    <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
            <label htmlFor='title'>Meetup Title</label>
            <input type='text' required id='title' ref={titleRef}/>
         </div>
          <div className={classes.control}>
            <label htmlFor='image'>Meetup Image</label>
            <input type='url' required id='image'  ref={imageRef}/>
         </div>
          <div className={classes.control}>
            <label htmlFor='address'>Meetup Title</label>
            <input type='text' required id='address'  ref={addressRef}/>
         </div>
         <div className={classes.control}>
            <label htmlFor='description'>Description</label>
           <textarea id='description' required rows='5'  ref={descriptionRef}></textarea>
         </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
         
    </form>
  </Card>
}

export default NewMeeupForm