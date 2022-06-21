import {getAllEvents} from '../../dummy-data'
import { Fragment } from 'react';
import { useRouter} from 'next/router'
import EventList from '../../components/events/event-list';
import EventSearch from './event-search';

const EventsPage = () => {
  const router = useRouter()
  const events = getAllEvents();
  
  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventHandler}/>
      <EventList items={events}/>
    </Fragment>
  )
}

export default EventsPage