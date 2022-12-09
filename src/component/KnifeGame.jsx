import React, { useState, useEffect } from 'react';
import KnifeCard from './KnifeCard';
import faca from '../img/faca.png'
import flor from '../img/flor.png'

function KnifeGame() {
  const [num, setNum] = useState(0);
  const [result, setResult] = useState();
  const [oponentResult, setOponentResult] = useState();
  const [playerTurn, setplayerTurn] = useState(true);

  const ranNum = (num) => {
    return Math.ceil (Math.random() * num)
  }

  const newNumber = () => {
    setNum(ranNum(6) - 1)
  }

  useEffect(() => {
    newNumber()
  })

  const oponent = () => {
    setplayerTurn(false)
    const answer = ranNum(4) === ranNum(4)
    setOponentResult(answer) 
  }

  const resultFunc = () => {
    if (result === 'errou') {
      return (
        <>
         '<img src={flor} alt="flor" />
          <p>Voce escolheu uma faca falsa, e hora do seu adversario escolher uma</p>
          <button onClick={oponent}>Clique aqui para o seu adversario jogar</button>
        </>
      )
    }
    if (result === 'acertou'){
      return (
        <>
          <img src={faca} alt="faca" />
          <p>Voce escolheu a faca verdadeira, Voce perdeu não só a partida...</p>
          <button onClick={() => {newNumber(); setResult()}}>Jogar novamente</button>
        </>
      )
    }
  }

  const oponentResultFunc = () => {
    return oponentResult?
        <>
          <img src={flor} alt="flor" />
          <p>Seu oponente escolheu uma faca falsa, vamos para outra rodada</p>
          <button onClick={()=>{setResult(); setplayerTurn(true)}}>Clique aqui embaralhar as facas</button>
        </>:<>
          <img src={faca} alt="faca" />
          <p>Seu oponente escolheu a faca verdadeira, parabens voce Ganheu a partida!!</p>
          <button onClick={() => {newNumber(); setResult(); setplayerTurn(true)}}>Jogar novamente</button>
        </>
  }

  const cardCriator=()=>{
    const Q = 6
    const arr = []
    arr.push(<p key={'text'}>Escolha uma carta</p>)
    for (let index = 0; index < Q; index++) {
      arr.push(<KnifeCard key={index} num={num} index={index} setResult={setResult}/>)
    }
    return arr
  }

  return (
    <div className="App">
      { playerTurn ? !result ? cardCriator() : resultFunc(): oponentResultFunc()}
    </div>
  );
}

export default KnifeGame;