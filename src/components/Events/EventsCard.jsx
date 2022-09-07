import React from 'react'
import location from '../assets/location.svg'

const EventsCard = ({event}) => {
  return (
    <div className='events-card'>

       <div className='image-container'>
           <img src={event.image} alt={event.alt}/>
       </div> 

       <div className='description-container'>
           <div className='description-header'>
              <img src={location} alt='location icon'/> 
              <h2 className='country'>{event.country}</h2>
              <p className='view'>View on Google Maps</p>
           </div>
           <div className='description-body'>
               <h2 className='location'>{event.location}</h2> 
               <p className='date'>{event.date}</p> 
               <p className='description'>{event.description}</p>
           </div>
       </div>

    </div>
  )
}

export default EventsCard