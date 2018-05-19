import * as assert from 'assert';

import { BPM } from '../../model/BPM';
import { Duration } from '../../model/Duration';
import { calculateDelayTime } from '../calculator';

test('60 BPM (1/4), 1/4', () => {
  const bpmBaseDuration = new Duration(1, 4);
  const bpm = new BPM(bpmBaseDuration, 60);
  const dur = new Duration(1, 4);
  assert.equal(calculateDelayTime(bpm, dur), 1000);
});

test('60 BPM (1/4), 1/8', () => {
  const bpmBaseDuration = new Duration(1, 4);
  const bpm = new BPM(bpmBaseDuration, 60);
  const dur = new Duration(1, 8);
  assert.equal(calculateDelayTime(bpm, dur), 500);
});

test('120 BPM (1/4), 1/4', () => {
  const bpmBaseDuration = new Duration(1, 4);
  const bpm = new BPM(bpmBaseDuration, 120);
  const dur = new Duration(1, 4);
  assert.equal(calculateDelayTime(bpm, dur), 500);
});
