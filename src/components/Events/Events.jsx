import React from 'react'
import EventsCard from './EventsCard'
import { data } from './EventsData'

const Events = () => {
  const singleEvent = data.map( event => {
      return <EventsCard 
          key={event.id}
          event={event}
      />
  })
  return (
    <div className='events-container'>
       { singleEvent}
    </div>
  )
}

export default Events