import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { McqpageComponent } from './components/mcqpage/mcqpage.component';
import {MCQdataService} from './services/mcqdata.service'

@NgModule({
  declarations: [
    AppComponent,
    McqpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MCQdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
