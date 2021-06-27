import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommentsServiceModule } from 'src/service/comments/comments.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentModule } from './comment/comment.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommentModule,
    CommentsServiceModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}
