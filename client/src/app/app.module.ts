import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommentsModule } from 'src/service/comments/comments.module';
import { CommentsService } from 'src/service/comments/comments.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
