export default function EventDetails({ event }) {
    return (
      <div>
        <h1>{event.title}</h1>
        <p>{event.summary}</p>
        <p>{event.start_date} - {event.end_date}</p>
        <p>{event.visiting_hours_and_days}</p>
        <p>Rating: {event.rating}</p>
        <p>Location: {event.location}</p>
        <p>Address: {event.address}</p>
        <p>Artist: {event.artist}</p>
        <p>Type: {event.type}</p>
      </div>
    );
  }
  