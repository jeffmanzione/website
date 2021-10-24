import { Component } from '@angular/core';
import { ApisModel } from 'src/app/models/apis/apis.model';
import { ApiRef, ApisService } from 'src/service/apis/apis.service';

@Component({
  selector: 'apis',
  templateUrl: 'apis.component.html',
  styleUrls: ['apis.component.scss'],
})
export class ApisComponent {

  private _model: ApisModel;
  public viewModel: ApisModel;

  constructor(private apisService: ApisService) {
    this._model = new ApisModel();
    this.viewModel = new ApisModel();
    this.apisService.list().then(result => this.apiRefs = result);
  }

  public set apiRefs(data: ApiRef[]) {
    this._model.apiRefs = data;
    this._updateView();
  }

  private _updateView(): void {
    this.viewModel = this._model.clone();
  }
}