import { NgModule } from "@angular/core";
import { CommentCardComponent } from "./comment-card.component";
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CommentCardComponent],
  exports: [CommentCardComponent],
  imports: [MatCardModule]
})
export class CommentCardModule { }