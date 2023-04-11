import React from 'react';
import './App.css';
import InputField from './components/inputField';

const App:React.FC = () => {
  return (
    <div className="App">
      <span className='heading'>taskify</span>
      <InputField/>
    </div>
  );
}

export default App;