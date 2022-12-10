import React, { useState, useEffect } from 'react';
import carta from '../img/carta.png'
import faca from '../img/faca.png'
import flor from '../img/flor.png'
import * as S from './style/knifeCard'

function KnifeCard(props) {
  const [card, setCard] = useState(carta)
  const [color, setColor] = useState('#666')
  const { num, index, setResult, result} = props

  const check = () => {
    setResult(num === index ? 'acertou': 'errou')
    result ? setColor('#666') : setColor('#2b425c')
  }

  useEffect(() => {
    result ? setCard(num === index ? faca : flor) : setCard(carta)
    if (!result) {
      setColor('#666')
    }
  },[result])

  return (
    <S.CardDiv  >
      <button onClick={check} style={{backgroundColor: color}} >
        <img src={card} alt="carta" />
      </button>
    </S.CardDiv>
  );
}

export default KnifeCard;
