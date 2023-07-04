import LevelInput, { LevelInputProps } from 'components/levelInput/LevelInput';
import TextArea from 'components/textArea/TextArea';
import {
  WithEditableLabel,
  WithEditableLabelProps,
} from 'components/withEditableLabel';
import { Wrapper } from './styled';

export interface DispciplineProps
  extends WithEditableLabelProps,
    LevelInputProps {}

function Discipline(props: DispciplineProps) {
  const { id, levels } = props;
  return (
    <Wrapper>
      <WithEditableLabel id={id}>
        <LevelInput levels={levels} id={id} label={''} />
      </WithEditableLabel>
      <TextArea width="100%"/>
    </Wrapper>
  );
}

export default Discipline;
