import axios from 'axios';
import { useState } from 'react';
import Login from './components/Login';
import Display from './components/Display';
import GlobalStyle from './styles/globalStyles';

function App() {

  const [status, setStatus] = useState(false)
  const [isRequested, setIsRequested] = useState(false)

  return (
    <div className="App">
      <GlobalStyle />
      <h1>Faça seu login</h1>
      <Login setStatus={setStatus} setIsRequested={setIsRequested} />
      {isRequested ? <Display status={status} /> : null}
    </div>
  );
}

export default App;
