import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeechRecognitionComponent } from './speech-recognition/speech-recognition.component';
import { SpeechToTextComponent } from './speech-to-text/speech-to-text.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeechRecognitionComponent,
    SpeechToTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
