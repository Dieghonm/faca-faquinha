import { useState } from 'react';
import KnifeGame from './component/KnifeGame';

import './App.css';

function App() {
  const [modal, setmodal] = useState('none')

  return (
    <div className="App">
      <button onClick={()=> setmodal('block')}>Jogar Faca Faquinha</button>
      <div style={{display : modal}}>
        <KnifeGame />
        <button onClick={()=> setmodal('none')}>Sair</button>
      </div>
    </div>
  );
}

export default App;
