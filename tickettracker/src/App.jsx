import React from 'react'
import './App.scss';
import TicketsTiles from './components/TicketTiles/TicketsTiles';
import team from './data/team'

const App = () => {
  return (
    <div className="ticket__tracker">
      <div className="ticket__tracker__header">Ticket Tracker</div>
      <TicketsTiles className="ticket__tracker__team" teamArr={team}/>
    </div>
  );
}

export default App;
