import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {

  const onClose = () => {
    tg.close();
  }

  useEffect(() => {
    tg.ready();
  }, [])
  
  return (
    <div className="App">
      <p>SCAM SCAM SCAM</p>
      <button onClick={onClose}>Одуматься</button>
    </div>
  );
}

export default App;
