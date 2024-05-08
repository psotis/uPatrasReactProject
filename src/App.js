import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homescreen';
import EventPage from './pages/eventspage/EventPage';

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/event/:eventId" element={<EventPage />} />
      </Routes>
    </Router>
  );
}

export default App;
