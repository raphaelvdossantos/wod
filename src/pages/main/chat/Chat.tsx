import MessageInput from "components/messageInput/MessageInput";
import Messages from "components/messages/Messages";
import { Wrapper } from "./styled";

function Chat() {
    return <Wrapper>
        <Messages/>
        <MessageInput/>
    </Wrapper>
}

export default Chat;