import * as React from 'react';

import { BPM } from '../../domain/model/BPM';
import { Duration, predefinedDurations } from '../../domain/model/Duration';
import { calculateDelayTime } from '../../domain/service/calculator';
import { BeatInput } from '../BeatInput';
import { BPMInput } from '../BPMInput';
import { DelayTime } from '../DelayTime';

// tslint:disable-next-line:interface-name
interface State {
  bpm: BPM;
  beat: Duration;
}

export class Form extends React.PureComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      beat: (predefinedDurations.get(Symbol.for("1/8 duration")) as Duration),
      bpm: new BPM((predefinedDurations.get(Symbol.for("1/4 duration")) as Duration), 120),
    };
  }

  public render() {
    const { bpm: defaultBpm, beat: defaultBeat } = this.state;
    const delayTimeMicroSeconds = calculateDelayTime(defaultBpm, defaultBeat);

    return (
      <div>
        <BPMInput defaultBpm={defaultBpm} onChange={this.onChangeBpm} />
        <BeatInput
          numerator={1}
          denominator={8}
          onChange={this.onChangeBeat} />
        =
        <DelayTime delayTime={delayTimeMicroSeconds} />
      </div>
    );
  }

  private onChangeBpm: (bpm: BPM) => void = (bpm) => {
    this.setState({ bpm });
  };

  private onChangeBeat: (beat: Duration) => void = (beat) => {
    this.setState({ beat });
  };
}
