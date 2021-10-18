import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApisModule } from './apis/apis.module';
import { HomeModule } from './home/home.module';
import { ElectionsModule } from './elections/elections.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ApisModule,
    HomeModule,
    ElectionsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
