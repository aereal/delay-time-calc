import * as React from 'react';

import { Duration } from '../../domain/model/Duration';
import { DurationDenominatorInput } from './denominator';
import { DurationNumeratorInput } from './numerator';

// tslint:disable-next-line:interface-name
interface Props {
  durationNumerator: number;
  durationDenominator: number;
  onChange: (noteValue: Duration) => void;
}

export const NoteValueInput: React.SFC<Props> = ({ durationNumerator, durationDenominator, onChange }) => {
  const onChangeNumerator = (numerator: number) => {
    onChange(new Duration(numerator, durationDenominator));
  };
  const onChangeDenominator = (denominator: number) => {
    onChange(new Duration(durationNumerator, denominator));
  };

  return (
    <div>
      <DurationNumeratorInput
        value={durationNumerator}
        onChange={onChangeNumerator}
        />
      <DurationDenominatorInput
        value={durationDenominator}
        onChange={onChangeDenominator}
        />
    </div>
  );
};
