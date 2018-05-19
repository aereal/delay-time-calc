import { BPM } from '../model/BPM';
import { Duration } from '../model/Duration';

export const calculateDelayTime = (bpm: BPM, duration: Duration): number => {
  const beats = 60 / bpm.perMinute;
  const unitTimeSeconds = duration.value() / bpm.unitBeat.value();
  return beats * unitTimeSeconds * 1000;
};
