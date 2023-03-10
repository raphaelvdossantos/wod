import React, { useState } from 'react';
import { Placement } from 'common/Label';
import { Input } from 'components/input';
import { CustomInput } from 'types/Input';

export interface WithEditableLabelProps {
  id: string;
  children: JSX.Element;
  placement?: Placement;
  inputType?: CustomInput;
}

function WithEditableLabel(props: WithEditableLabelProps) {
  const { id, placement, inputType, children } = props;
  const [inputLabel, setInputLabel] = useState('');

  return (
    <div style={{ display: 'inline-flex', justifyContent: 'space-between' }}>
      <Input
        id={`editableLabel-${id}`}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setInputLabel(event.currentTarget.value)
        }
      />
      {children}
    </div>
  );
}

export default WithEditableLabel;
