import * as React from 'react';

import { BPM } from '../../domain/model/BPM';
import { Duration, predefinedDurations } from '../../domain/model/Duration';
import { calculateDelayTime } from '../../domain/service/calculator';
import { BPMInput } from '../BPMInput';
import { DelayTime } from '../DelayTime';
import { NoteValueInput } from '../NoteValueInput';

// tslint:disable-next-line:interface-name
interface State {
  bpm: BPM;
  noteValue: Duration;
}

export class Form extends React.PureComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      bpm: new BPM((predefinedDurations.get(Symbol.for("1/4 duration")) as Duration), 120),
      noteValue: (predefinedDurations.get(Symbol.for("1/8 duration")) as Duration),
    };
  }

  public render() {
    const { bpm: defaultBpm, noteValue: defaultNoteValue } = this.state;
    const delayTimeMicroSeconds = calculateDelayTime(defaultBpm, defaultNoteValue);

    return (
      <div>
        <BPMInput defaultBpm={defaultBpm} onChange={this.onChangeBpm} />
        <NoteValueInput
          durationNumerator={1}
          durationDenominator={8}
          onChange={this.onChangeNoteValue} />
        =
        <DelayTime delayTime={delayTimeMicroSeconds} />
      </div>
    );
  }

  private onChangeBpm: (bpm: BPM) => void = (bpm) => {
    this.setState({ bpm });
  };

  private onChangeNoteValue: (noteValue: Duration) => void = (noteValue) => {
    this.setState({ noteValue });
  };
}
