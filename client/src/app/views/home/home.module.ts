import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsServiceModule } from 'src/service/comments/comments.module';
import { CommentModule } from './comment/comment.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommentModule,
    CommentsServiceModule,
    CommonModule,
  ],
})
export class HomeModule { }
