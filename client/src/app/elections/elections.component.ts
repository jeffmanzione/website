import { Component, OnInit } from '@angular/core';
import { ElectionResult, ElectionsService } from 'src/service/elections/elections.service';

@Component({
  selector: 'elections',
  templateUrl: 'elections.component.html',
  styleUrls: ['elections.component.scss'],
})
export class ElectionsComponent implements OnInit {
  displayedColumns: string[] = ['state', 'sample-size', 'vote-dem-pp', 'vote-rep-pp', 'favored-party', 'diff-pp'];
  electionResults: ElectionResult[] = [];

  constructor(private electionsService: ElectionsService) { }

  ngOnInit(): void {
    this.electionsService.list().then(results => this.electionResults = results);
  }

  percentText(num: number): String {
    return `${(num * 100).toFixed(1)}%`;
  }

  spreadPercentText(er: ElectionResult): String {
    return `+${this.percentText(er.diffPp)} `
      + `[${this.percentText(er.diffPp - er.stderrPp)}, `
      + `${this.percentText(er.diffPp + er.stderrPp)}]`;
  }
}