import {getFeaturedEvents} from '../dummy-data'
import EventList from '../components/events/event-list'
function HomePage(){
    const featuredEvents = getFeaturedEvents()
    return (
        <div>
            <EventList items={featuredEvents}/>
        </div>
    )
}

export async function getStaticProps(){
    return {props : {
        products: [{
            id: 'p1',
            title: 'Product 1'
        }]
    }}
}

export default HomePage