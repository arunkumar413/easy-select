import React, { useState, useEffect } from 'react';
import './style.css';
import { EasySelect } from './EasySelect';

export default function App() {
  const [selected, setSelected] = useState({ label: '', value: '' });

  const selectOptions = [
    { label: 'January', value: 0 },
    { label: 'February', value: 1 },
    { label: 'March', value: 2 },
    { label: 'April', value: 3 },
    { label: 'May', value: 4 },
    { label: 'June', value: 5 },
    { label: 'July', value: 6 },
    { label: 'March', value: 7 },
  ];

  function handleSelect(evt, item) {
    debugger;
    setSelected({ ...selected, label: item.label, value: item.value });
  }

  return (
    <div className="App">
      {' '}
      <EasySelect
        value={selected}
        options={selectOptions}
        onSelect={handleSelect}
      />{' '}
    </div>
  );
}
