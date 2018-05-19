import TextField from '@material-ui/core/TextField';
import * as React from 'react';

import { BPM } from '../../domain/model/BPM';

// tslint:disable-next-line:interface-name
interface Props {
  defaultBpm: BPM;
  onChange: (bpm: BPM) => void;
}

export const BPMInput: React.SFC<Props> = ({ defaultBpm, onChange }) => {
  const handler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const bpm = event.target.valueAsNumber;
    onChange(new BPM(defaultBpm.unitBeat, bpm));
  };

  return (
    <TextField
      onChange={handler}
      defaultValue={defaultBpm.perMinute}
      label="BPM"
      type="number" />
  );
};
