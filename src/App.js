import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homescreen';
import EventPage from './pages/eventspage/EventPage';

import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/event/:eventId" element={<EventPage />} />
      </Routes>
    </Router>
  );
}
