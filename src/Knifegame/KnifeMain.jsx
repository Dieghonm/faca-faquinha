import { useState } from 'react';
import KnifeGame from './KnifeGame';

import * as S from './style/knifeMain'

function KnifeMain() {
  const [modal, setmodal] = useState('none')

  return (
    <S.KnifeMainDiv>
      <button onClick={()=> setmodal('block')}>Jogar Faca Faquinha</button>
      <S.KnifeBlockDiv style={{display : modal}}>
      </S.KnifeBlockDiv>
        <S.KnifrModalDiv style={{display : modal}}>
          <KnifeGame />
          <S.ExitModalButton onClick={()=> setmodal('none')}>Sair</S.ExitModalButton>
        </S.KnifrModalDiv>
    </S.KnifeMainDiv>
  );
}

export default KnifeMain;