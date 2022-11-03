import Button from 'components/button/Button';
import TextArea from 'components/textArea/TextArea';
import { Wrapper } from './styled';

function MessageInput() {
  return (
    <Wrapper>
      <TextArea />
      <Button text='Send' />
    </Wrapper>
  );
}

export default MessageInput;
