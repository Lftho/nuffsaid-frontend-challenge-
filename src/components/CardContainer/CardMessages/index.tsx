import React, { useState, useEffect } from 'react';
import generateMessage, { Message } from '../../../services/Api';
import ActionsButton from '../../ActionButtons';
import CardList from '../CardList';
import { Content, FlexDiv } from './styles';


const Messages: React.FC<{}> = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const cleanUp = generateMessage((message: Message) => {
      setMessages(oldMessages => [...oldMessages, message]);
    });
    return cleanUp;
  }, [setMessages]);

  const RemoveOne = (target: any) => {
    console.log(target);
    setMessages((prev) => prev.filter((msg) => msg?.message !== target));
  };

  return (
    <Content>
      <ActionsButton clearMessages={() => setMessages([])} />
      <FlexDiv>
        <CardList
          title={`Error Type 1`}
          messages={messages}
          priority={0}
          clearOne={RemoveOne}
        />
        <CardList
          title={`Error Type 2`}
          messages={messages}
          priority={1}
          clearOne={RemoveOne}
        />
        <CardList
          title={`Error Type 3`}
          messages={messages}
          priority={2}
          clearOne={RemoveOne}
        />
      </FlexDiv>
    </Content>
  )
}

export default Messages;