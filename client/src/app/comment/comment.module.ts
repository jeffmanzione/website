import { NgModule } from "@angular/core";
import { CommentComponent } from "./comment.component";
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [CommentComponent],
  exports: [CommentComponent],
  imports: [MatCardModule]
})
export class CommentModule { }