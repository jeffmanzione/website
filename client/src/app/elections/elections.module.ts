import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import { ElectionsComponent } from "./elections.component";
import { ElectionsServiceModule } from "src/service/elections/elections.module";

@NgModule({
  declarations: [ElectionsComponent],
  exports: [ElectionsComponent],
  imports: [
    ElectionsServiceModule,
    MatTableModule,
  ]
})
export class ElectionsModule { }