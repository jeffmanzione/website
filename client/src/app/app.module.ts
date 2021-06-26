import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommentsServiceModule } from 'src/service/comments/comments.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentModule } from './comment/comment.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommentModule,
    CommentsServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}
