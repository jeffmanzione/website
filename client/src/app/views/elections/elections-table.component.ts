import { Component, Input, OnInit } from '@angular/core';
import { ElectionsTableModel } from 'src/app/models/elections/elections-table.model';
import { ElectionResult } from 'src/service/elections/elections.service';

@Component({
  selector: 'elections-table',
  templateUrl: 'elections-table.component.html',
  styleUrls: ['elections-table.component.scss'],
})
export class ElectionsTableComponent {
  static displayedColumns: string[] = [
    'state',
    'sample-size',
    'vote-dem-pp',
    'vote-rep-pp',
    'favored-party',
    'diff-pp',
    'dem-win-pp',
    'rep-win-pp',
  ];

  private _model: ElectionsTableModel;
  public viewModel: ElectionsTableModel;

  @Input()
  set electionResults(data: ElectionResult[]) {
    this._electionResults = data;
    this._loadModel();
    this._updateView();
  }
  private _electionResults: ElectionResult[] = [];

  constructor() {
    this._model = new ElectionsTableModel();
    this.viewModel = new ElectionsTableModel();
  }

  private _loadModel(): void {
    this._model.electionResults = this._electionResults;
  }

  private _updateView(): void {
    this.viewModel = this._model.clone();
  }

  public get displayedColumns(): String[] {
    return ElectionsTableComponent.displayedColumns;
  }

  public percentText(num: number): String {
    return `${(num * 100).toFixed(1)}%`;
  }

  public spreadPercentText(er: ElectionResult): String {
    return `+${this.percentText(er.diffPp)} `
      + `[${this.percentText(er.diffPp - er.stderrPp)}, `
      + `${this.percentText(er.diffPp + er.stderrPp)}]`;
  }
}