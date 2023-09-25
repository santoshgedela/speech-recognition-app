import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeechRecognitionComponent } from './speech-recognition/speech-recognition.component';
import { SpeechToTextComponent } from './speech-to-text/speech-to-text.component';

const routes: Routes = [
  {
    path:"speechRecognition",
    component:SpeechRecognitionComponent
  },
  {
    path:"speech",
    component:SpeechToTextComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
