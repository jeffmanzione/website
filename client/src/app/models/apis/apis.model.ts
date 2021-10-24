import { ApiRef } from "src/service/apis/apis.service";

export class ApisModel {
  public apiRefs: ApiRef[] = [];

  public clone(): ApisModel {
    const newModel = new ApisModel();
    // Should probably copy the actual refs.
    newModel.apiRefs = this.apiRefs
    return newModel;
  }
}