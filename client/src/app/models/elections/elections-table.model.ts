import { ElectionResult } from "src/service/elections/elections.service";


export class ElectionsTableModel {
  public electionResults: ElectionResult[] = [];

  public clone(): ElectionsTableModel {
    let modelClone = new ElectionsTableModel();
    modelClone.electionResults = this.electionResults.map(er => er.clone());
    return modelClone;
  }
}