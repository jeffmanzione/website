import { Component, Input } from '@angular/core';
import { ElectionResult } from 'src/service/elections/elections.service';

@Component({
  selector: 'elections-table',
  templateUrl: 'elections-table.component.html',
  styleUrls: ['elections-table.component.scss'],
})
export class ElectionsTableComponent {
  displayedColumns: string[] = [
    'state', 'sample-size', 'vote-dem-pp', 'vote-rep-pp', 'favored-party', 'diff-pp'];

  @Input()
  electionResults: ElectionResult[] = [];

  percentText(num: number): String {
    return `${(num * 100).toFixed(1)}%`;
  }

  spreadPercentText(er: ElectionResult): String {
    return `+${this.percentText(er.diffPp)} `
      + `[${this.percentText(er.diffPp - er.stderrPp)}, `
      + `${this.percentText(er.diffPp + er.stderrPp)}]`;
  }
}