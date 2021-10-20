import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import { ElectionsComponent } from "./elections.component";
import { ElectionsServiceModule } from "src/service/elections/elections.module";
import { ElectionsTableComponent } from "./elections-table.component";

@NgModule({
  declarations: [ElectionsComponent, ElectionsTableComponent],
  exports: [
    ElectionsComponent,
    ElectionsTableComponent,
  ],
  imports: [
    ElectionsServiceModule,
    MatTableModule,
  ]
})
export class ElectionsModule { }