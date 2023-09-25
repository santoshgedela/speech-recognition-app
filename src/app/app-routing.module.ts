import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeechRecognitionComponent } from './speech-recognition/speech-recognition.component';

const routes: Routes = [
  {
    path:"speechRecognition",
    component:SpeechRecognitionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
