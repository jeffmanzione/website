import { Component, OnInit } from '@angular/core';
import { ElectionResult, ElectionsService } from 'src/service/elections/elections.service';

@Component({
  selector: 'elections',
  templateUrl: 'elections.component.html',
  styleUrls: ['elections.component.scss'],
})
export class ElectionsComponent implements OnInit {
  electionResults: ElectionResult[] = [];

  constructor(private electionsService: ElectionsService) { }

  ngOnInit(): void {
    this.electionsService.list().then(results => this.electionResults = results);
  }
}