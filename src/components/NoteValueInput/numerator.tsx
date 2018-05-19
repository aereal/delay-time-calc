import TextField from '@material-ui/core/TextField';
import * as React from 'react';

// tslint:disable-next-line:interface-name
interface Props {
  value: number;
  onChange: (numerator: number) => void;
}

export const DurationNumeratorInput: React.SFC<Props> = ({ onChange, value }) => {
  const handler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const numerator = event.target.valueAsNumber;
    onChange(numerator);
  };

  return (
    <TextField
      label="Note Value (Numerator)"
      onChange={handler}
      defaultValue={value}
      type="number" />
  );
};
