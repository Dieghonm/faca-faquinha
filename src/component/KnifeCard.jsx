import React, { useState, useEffect } from 'react';
import carta from '../img/carta.png'
import * as S from '../style/knifeCard'

function KnifeCard(props) {
  const [text, setText] = useState('carta')
  const { num, index, setResult} = props

  const check = () => {
    const answer = num === index ? 'acertou': 'errou'
    setText(answer)
    setResult(answer)
  }

  return (
    <S.CardButton onClick={check}><img src={carta} alt="carta" /></S.CardButton>
  );
}

export default KnifeCard;