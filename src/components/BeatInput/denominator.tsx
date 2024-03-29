import TextField from '@material-ui/core/TextField';
import * as React from 'react';

// tslint:disable-next-line:interface-name
interface Props {
  value: number;
  onChange: (denominator: number) => void;
}

export const BeatDenominatorInput: React.SFC<Props> = ({ onChange, value }) => {
  const handler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const denominator = event.target.valueAsNumber;
    onChange(denominator);
  };

  return (
    <TextField
      inputProps={{min: 0}}
      label="Beat (Denominator)"
      onChange={handler}
      defaultValue={value}
      type="number" />
  );
};
