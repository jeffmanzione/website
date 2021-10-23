
import { Injectable } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Service } from '../service';

@Injectable()
export class ElectionsService extends Service {
  list(): Promise<ElectionResult[]> {
    return this.sendRequest('/_/api/ElectionsApi.list', 'GET')
      .then((response: Object) => (response as [])
        .map((electionResultList) => new ElectionResult(electionResultList)));
  }
}

export class ElectionResult {
  state: string;
  sampleSize: number;
  voteDemPp: number;
  voteRepPp: number;
  favoredParty: string;
  diffPp: number;
  stderrPp: number;
  simulationCount: number;
  demWinPp: number;
  repWinPp: number;
  constructor(electionResultObj: any[]) {
    this.state = electionResultObj[0];
    this.sampleSize = electionResultObj[1];
    this.voteDemPp = electionResultObj[2];
    this.voteRepPp = electionResultObj[3];
    this.favoredParty = electionResultObj[4];
    // Forgot to do that before storing in database.
    this.diffPp = Math.abs(electionResultObj[5]);
    this.stderrPp = electionResultObj[6];
    this.simulationCount = electionResultObj[7];
    this.demWinPp = electionResultObj[8];
    this.repWinPp = electionResultObj[9];
  }
  toString(): string {
    return JSON.stringify(this);
  }

  public clone(): ElectionResult {
    return new ElectionResult([
      this.state,
      this.sampleSize,
      this.voteDemPp,
      this.voteRepPp,
      this.favoredParty,
      this.diffPp,
      this.stderrPp,
      this.simulationCount,
      this.demWinPp,
      this.repWinPp,
    ]);
  }
}