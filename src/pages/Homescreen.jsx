import { useState, useEffect } from 'react';
import EventList from '../components/EventList';
import FilterBar from '../components/filter/FilterBar';
import eventsData from '../events/events.json';

export default function Homepage() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
    setFilteredEvents(eventsData);
  }, []);

  function handleFilter(query) {
    const filtered = events.filter(event =>
      event.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEvents(filtered);
  }

  return (
    <div className="home-container">
      <h1 className="page-title">Καλλιτεχνικές εκδηλώσεις Πάτρας</h1>
      <FilterBar onFilter={handleFilter} />
      <EventList events={filteredEvents} />
    </div>
  );
}
