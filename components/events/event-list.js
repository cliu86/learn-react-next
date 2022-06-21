import EventItem from './event-item'
import classes from './event-list.module.css'
function EventList(props){
  const { items } = props 
  return (
    <ul className={classes.list}>
      {
        items.map(event => (
        <EventItem 
          id={event.id} 
          location={event.location} 
          title={event.title} 
          image={event.image}
          date={event.date}
          key={event.id}
        />
      ))}
    </ul>
  )
}

export default EventList