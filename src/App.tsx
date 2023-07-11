import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Button from './components/Button';

function App() {
  const [renderForm, setRenderForm] = useState(false);
  function handleRenderForm() {
    setRenderForm(true);
  }
  function handleHideForm() {
    setRenderForm(false);
  }
  return (
    <>
      <Header />
      {renderForm && (<Form handleHideForm={ () => handleHideForm() } />)}
      {!renderForm && (<Button handleRenderForm={ () => handleRenderForm() } />)}
    </>
  );
}

export default App;
