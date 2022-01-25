import React from 'react';
import CardInfo from '../CardInfo';
import { ListCard, Count, Title } from './styles';

interface propsInfoData {
  title: string;
  messages: any;
  priority: number;
  clearOne: any;
}

const CardList: React.FC<propsInfoData> = ({ title, messages, priority, clearOne }) => {
  let color = "#F56236";
  if (priority === 1)
    color = "#FCE788";
  if (priority === 2)
    color = "#88FCA3";

  const length = messages.filter((msg: any) => msg.priority === priority).length;

  return (
    <ListCard>
      <Title>{title}</Title>
      <Count>Count {length}</Count>

      {messages?.map?.((msg: any) =>
        msg.priority === priority ? (
          <div key={msg?.message}>
            <CardInfo
              message={msg?.message}
              background={color}
              clearOne={clearOne}
            />
          </div>
        ) : null
      )}
    </ListCard>
  )
}

export default CardList;