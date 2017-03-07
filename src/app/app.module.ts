import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NlpStreamService } from './services/nlp-stream.service';
import { AppComponent } from './app.component';
import { MessagesBoardComponent } from './components/messages-board/messages-board.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    NlpStreamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
