import { IMessage } from "types/Message";
import { Message, MessageInfo, MessageList, Wrapper } from "./styled";

interface MessagesProps {
  messages?: IMessage[];
}

function Messages(props: MessagesProps) {
  const { messages } = props;

  return (
    <Wrapper>
      <MessageList>
        {messages && (
          <Message isSender={false}>
            <MessageInfo />
          </Message>
        )}
      </MessageList>
    </Wrapper>
  );
}

export default Messages;
