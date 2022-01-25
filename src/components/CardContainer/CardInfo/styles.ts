import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 14px;
  font-weight: 500;
`;
export const Clear = styled.a`
  position: absolute;
  font-size: 12px;
  right: 5px;
  bottom: 5px;
  cursor: pointer;
`;

export const MessageDiv: any = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: ${(props: any) => props.IFbackground};
  position: relative;
  height: 70px;
  border-radius: 2px;
  padding: 10px;
  margin: 10px 5px;
  box-shaow: 0 0 15px 0 black;
`;