import Attributes from './attributes/Attributes';
import Disciplines from './disciplines/Disciplines';
import Header from './header/Header';
import BGMeritsFlaws from "./others/BGMertisFlaws";
import ComplementaryBackground from './others/ComplementaryBackground';
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
      <ComplementaryBackground />
      <BGMeritsFlaws/>
    </div>
  );
}

export default CharacterSheet;
