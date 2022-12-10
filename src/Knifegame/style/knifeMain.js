import styled from 'styled-components'

export const KnifeMainDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const KnifeBlockDiv = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
`

export const KnifrModalDiv = styled.div`
  border: 1px solid #888;
  text-align: center;
  position: fixed;
  z-index: 2;
  top: 10%;
  width: 750px;
  height: 350px;
  overflow: auto;
  background-color: #282c34;
`;

export const ExitModalButton = styled.button`
  float: right;
  margin: 2px;
  width: 50px;
  height: 20px;
`
