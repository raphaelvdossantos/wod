import { InputWithLabel } from 'components/inputWithLabel';
import LevelInput from 'components/levelInput/LevelInput';

function ResonanceHunger() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 5em',
      }}
    >
      <InputWithLabel label='Resonance' />
      <LevelInput levels={5} id='Hunger' label='Hunger' />
    </div>
  );
}
export default ResonanceHunger;
