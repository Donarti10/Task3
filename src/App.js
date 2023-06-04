
import React, { useState } from 'react';
import './App.scss';
import Task from './Components/page';

function App() {
  const [openTask, setOpenTask] = useState(false);

  const Click = (e) => {
    const card = document.getElementById('card');
    if (openTask && card && !card.contains(e.target)) {
      setOpenTask(false);
    }
  };

  document.addEventListener('mousedown', Click);

  return (
    <div className='App'>
      <button className='btn' onClick={() => setOpenTask(true)}>Popup</button>
      {openTask && (
        <div id='card' className='card'>
          <Task closeTask={() => setOpenTask(false)} />
        </div>
      )}
    </div>
  );
}

export default App;
