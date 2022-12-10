import React, { useState, useEffect } from 'react';
import carta from '../img/carta.png'
import faca from '../img/faca.png'
import flor from '../img/flor.png'
import * as S from '../style/knifeCard'

function KnifeCard(props) {
  const [card, setCard] = useState(carta)
  const { num, index, setResult, result} = props

  const check = () => {
    setResult(num === index ? 'acertou': 'errou')
  }

  useEffect(() => {
    result ? setCard(num === index ? faca : flor) : setCard(carta)
  },[result])

  return (
    <S.CardDiv >
      <button onClick={check}>
        <img src={card} alt="carta" />
      </button>
    </S.CardDiv>
  );
}

export default KnifeCard;
