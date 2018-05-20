import TextField from '@material-ui/core/TextField';
import * as React from 'react';

import { BPM } from '../../domain/model/BPM';
import { Duration } from '../../domain/model/Duration';
import { BeatInput } from '../BeatInput';

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
  const onChangeUnitBeat = (unitBeat: Duration) => {
    onChange(new BPM(unitBeat, defaultBpm.perMinute));
  };

  return (
    <div>
      <TextField
        inputProps={{min: 0}}
        onChange={handler}
        defaultValue={defaultBpm.perMinute}
        label="BPM"
        type="number" />
      <BeatInput
        numerator={defaultBpm.unitBeat.numerator}
        denominator={defaultBpm.unitBeat.denominator}
        onChange={onChangeUnitBeat} />
    </div>
  );
};
