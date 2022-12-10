import React, { useState, useEffect } from 'react';
import KnifeCard from './KnifeCard';

import * as S from './style/knifeGame'

function KnifeGame() {
  const [num, setNum] = useState(0);
  const [oponentCard, setOponentCard] = useState(0);
  const [result, setResult] = useState();
  const [playerTurn, setplayerTurn] = useState(true);

  const ranNum = (num) => {
    return Math.ceil (Math.random() * num)
  }

  useEffect(() => {
    setNum(ranNum(6) - 1)
  })

  const cardCriator=()=>{
    const arr = []
    const Q = 6
    arr.push(<h3 key={'text'}>Escolha uma carta</h3>)
    for (let index = 0; index < Q; index++) {
      arr.push(
      <KnifeCard 
        key={index} 
        num={num} 
        index={index} 
        setResult={checkResult} 
        result={result}
      />)
    }
    return arr
  }

  const checkResult = (card) => {
    if (!result && playerTurn) {
      setResult(card)
    }
  }

  const oponent = () => {
    setNum(ranNum(playerTurn? 6: 4) )
    setOponentCard(ranNum(6))
    setResult()
    setplayerTurn(!playerTurn)
  }

  const oponentChoice = () => {
    setResult(num === oponentCard? 'acertou': 'errou')
  }

  const textCreator =() => {
    if (playerTurn) {
      if (result) {
        if (result === 'errou') {
          return (
            <S.textDiv>
              <p>Voce escolheu uma faca falsa, e hora do seu adversario escolher uma</p>
              <button onClick={oponent}>Clique aqui para embaralhar as cartas</button>
            </S.textDiv>
          )
        }
        if (result === 'acertou'){
          return (
            <S.textDiv>
              <p>Voce escolheu a faca verdadeira, Voce perdeu não só a partida...</p>
              <button onClick={() => {setNum(ranNum(6) - 1); setResult()}}>Jogar novamente</button>
            </S.textDiv>
          )
        }
      }
      return <S.textDiv></S.textDiv>
    } else {
      if (result) {
        return result==='errou'?
          <S.textDiv>
            <p>Seu oponente escolheu uma faca falsa, vamos para outra rodada?</p>
            <button onClick={oponent} >Clique aqui embaralhar as facas</button>
          </S.textDiv>:<S.textDiv>
            <p>Seu oponente escolheu a faca verdadeira, parabens voce Ganheu a partida!!</p>
            <button onClick={oponent}>Jogar novamente</button>
          </S.textDiv>
      }else {
        return (
          <S.textDiv>
            <p>Seu oponente ja escolheu uma carta</p>
            <button onClick={oponentChoice}>Clique para ver a escolha dele</button>
          </S.textDiv>
      )
      }
    }
  }

  return (
    <div className="App">
      {cardCriator()}
      {textCreator()}
    </div>
  );
}

export default KnifeGame;
