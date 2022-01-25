import React from 'react';
import { MessageDiv, Title, Clear } from './styles';

interface PropsCardInfo {
  message: string;
  background: string;
  clearOne: any;
}

const CardInfo: React.FC<PropsCardInfo> = ({ message, background, clearOne }) => {
  return (
    <MessageDiv IFbackground={background}>
      <Title>{message}.</Title>
      <Clear onClick={() => clearOne(message)}>clear</Clear>
    </MessageDiv>
  );
};

export default CardInfo;