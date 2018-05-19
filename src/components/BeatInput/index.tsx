import * as React from 'react';

import { Duration } from '../../domain/model/Duration';
import { BeatDenominatorInput } from './denominator';
import { BeatNumeratorInput } from './numerator';

// tslint:disable-next-line:interface-name
interface Props {
  numerator: number;
  denominator: number;
  onChange: (noteValue: Duration) => void;
}

export const BeatInput: React.SFC<Props> = ({ numerator, denominator, onChange }) => {
  const onChangeNumerator = (nextNumerator: number) => {
    onChange(new Duration(nextNumerator, denominator));
  };
  const onChangeDenominator = (nextDenominator: number) => {
    onChange(new Duration(numerator, nextDenominator));
  };

  return (
    <div>
      <BeatNumeratorInput
        value={numerator}
        onChange={onChangeNumerator}
        />
      <BeatDenominatorInput
        value={denominator}
        onChange={onChangeDenominator}
        />
    </div>
  );
};
