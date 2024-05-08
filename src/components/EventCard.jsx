import { Link } from 'react-router-dom';

export default function EventCard({ event }) {
  const renderStars = (grade) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= grade ? 'filled' : ''}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  const cardContent = (
    <div className={`event-card ${!event.isActive ? 'inactive' : ''}`}>
      <h3>{event.title}</h3>
      <p>{event.start_date} - {event.end_date}</p>
      <p>{event.location}</p>
      <div className="event-stars">
        {renderStars(event.grade)}
      </div>
    </div>
  );

  return event.isActive ? (
    <Link to={`/event/${event.id}`} className="event-card-link">
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
}
