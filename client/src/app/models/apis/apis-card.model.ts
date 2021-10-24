import { ApiRef } from "src/service/apis/apis.service";

export class ApiCardModel {
  public apiRef!: ApiRef;

  public clone(): ApiCardModel {
    const newModel = new ApiCardModel();
    // Should probably copy the actual refs.
    newModel.apiRef = this.apiRef;
    return newModel;
  }
}