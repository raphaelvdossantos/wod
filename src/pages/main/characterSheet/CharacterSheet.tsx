import Attributes from './attributes/Attributes';
import Disciplines from './disciplines/Disciplines';
import Header from './header/Header';
import ResonanceHunger from './others/ResonanceHunger';
import Skills from './skills/Skills';

function CharacterSheet() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Header />
      <Attributes />
      <Skills />
      <Disciplines />
      <ResonanceHunger />
    </div>
  );
}

export default CharacterSheet;
