import { Input } from 'components/input';
import React, { useState } from 'react';

export interface LevelInputProps {
  levels: number;
  label: string;
  id: string;
}

function LevelInput(props: LevelInputProps) {
  const [rating, setRating] = useState(0);

  const { levels, label, id } = props;

  return (
    <label htmlFor={id}>
      {label}
      {[...Array(levels)].map((_, index) => {
        index += 1;
        return (
          <Input
            inputType='checkbox'
            id={Math.random().toString()}
            key={Math.random()}
            checked={index <= rating}
            onChange={() => setRating(rating === index ? index - 1 : index)}
          />
        );
      })}
    </label>
  );
}

export default LevelInput;
