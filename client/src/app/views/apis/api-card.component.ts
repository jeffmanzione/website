import { Component, Input } from "@angular/core";
import { ApiCardModel } from "src/app/models/apis/apis-card.model";
import { ApiRef } from "src/service/apis/apis.service";

@Component({
  selector: 'api-card',
  templateUrl: 'api-card.component.html',
  styleUrls: ['api-card.component.scss'],
})
export class ApiCardComponent {

  private _model: ApiCardModel;
  public viewModel: ApiCardModel;

  @Input()
  public set apiRef(data: ApiRef) {
    this._model.apiRef = data;
    this._updateView();
  }

  constructor() {
    this._model = new ApiCardModel();
    this.viewModel = new ApiCardModel();
  }

  private _updateView(): void {
    this.viewModel = this._model.clone();
  }

}