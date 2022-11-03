import styled from "styled-components";

interface MessageProps {
  isSender: boolean;
}

const Wrapper = styled.div``;

const MessageList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const Message = styled.li<MessageProps>`
  padding: 10px;
  border-radius: 5px;

  align-self: ${(props) => (props.isSender ? "flex-end" : "flex-start")};
`;

const MessageInfo = styled.span``;

export { Wrapper, MessageList, MessageInfo, Message };
