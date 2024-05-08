import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import eventsData from '../../events/events.json';
import './EventPage.css';

export default function EventPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const foundEvent = eventsData.find(event => event.id.toString() === eventId);
    setEvent(foundEvent);
  }, [eventId]);

  return (
    <div className="event-page">
      {event ? (
        <div className="event-details">
          <h1 className="event-title">{event.title}</h1>
          <img className="event-image" src={event.image} alt={event.title} />
          <div className="event-info">
            <p><strong>Τίτλος:</strong> {event.summary}</p>
            <p><strong>Ημερομηνία έναρξης:</strong> {event.start_date}</p>
            <p><strong>Ημερομηνία λήξης:</strong> {event.end_date}</p>
            <p><strong>Ώρες επίσκεψης:</strong> {event.visiting_hours_and_days}</p>
            <p><strong>Βαθμολογία:</strong> {event.rating}</p>
            <p><strong>Τοποθεσία:</strong> {event.location}</p>
            <p><strong>Διεύθυνση:</strong> {event.address}</p>
            <p><strong>Καλλιτέχνης:</strong> {event.artist}</p>
            <p><strong>Είδος:</strong> {event.type}</p>
          </div>
        </div>
      ) : (
        <p>Event not found</p>
      )}
    </div>
  );
}

