import React from 'react';
import { CentralizedButton, Button } from './styles';
import { unSubscribe } from '../../services/Api'

const ActionsButton = ({ clearMessages }: any) => {
  return (
    <CentralizedButton>
      <Button onClick={unSubscribe}>Stop</Button>
      <Button onClick={clearMessages}>Clear</Button>
    </CentralizedButton>
  )
}

export default ActionsButton;