import { Component, OnInit } from '@angular/core';
import { ApiRef, ApisService } from 'src/service/apis/apis.service';

@Component({
  selector: 'apis',
  templateUrl: 'apis.component.html',
  styleUrls: ['apis.component.scss'],
})
export class ApisComponent implements OnInit {

  apiRefs: ApiRef[] = [];

  constructor(private apisService: ApisService) {}

  ngOnInit(): void {
    this.apisService.list().then(result => this.apiRefs = result);
  }
}