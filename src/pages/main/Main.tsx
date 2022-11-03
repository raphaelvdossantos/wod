import CharacterSheet from './characterSheet/CharacterSheet';
import Chat from './chat/Chat';
import { Wrapper } from './styled';

function Main() {
  return (
    <Wrapper>
      <Chat />
      <CharacterSheet />
    </Wrapper>
  );
}

export default Main;
