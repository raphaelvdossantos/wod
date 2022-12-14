import Attributes from './attributes/Attributes';
import Header from './header/Header';
import Skills from './skills/Skills';

function CharacterSheet() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Header />
      <Attributes />
      <Skills />
    </div>
  );
}

export default CharacterSheet;
