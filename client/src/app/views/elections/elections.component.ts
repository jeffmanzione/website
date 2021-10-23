import { Component, OnInit } from '@angular/core';
import { ElectionResult, ElectionsService } from 'src/service/elections/elections.service';

@Component({
  selector: 'elections',
  templateUrl: 'elections.component.html',
  styleUrls: ['elections.component.scss'],
})
export class ElectionsComponent {
  public electionResults: ElectionResult[] = [];

  constructor(private electionsService: ElectionsService) {
    this.fetchElectionResults();
  }

  async fetchElectionResults() {
    this.electionResults = await this.electionsService.list();
  }
}