import { Duration } from './Duration';

export class BPM {
  constructor(public unitBeat: Duration, public perMinute: number) {}

  public valueSeconds(): number {
    return 60 / this.perMinute;
  }
}
