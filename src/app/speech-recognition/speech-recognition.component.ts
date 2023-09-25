import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-speech-recognition',
  templateUrl: './speech-recognition.component.html',
  styleUrls: ['./speech-recognition.component.scss'],
  

})
export class SpeechRecognitionComponent {
  recognition: any;
  recognitionText: string = '';

  constructor(private zone: NgZone) {
    const win: any = window;
    this.recognition = new (win.SpeechRecognition || win.webkitSpeechRecognition)();
    this.recognition.onresult = (event:any) => {
      const result = event.results[0][0].transcript;
      this.zone.run(() => {
        this.recognitionText = result;
        this.processCommand(result);
      });
    };
  }

  startListening() {
    this.recognition.start();
  }

  processCommand(command: string) {
    
    this.recognitionText = command;

    
    if (command.toLowerCase().includes('search')) {
      const query = command.replace('search', '').trim();
      this.performWebSearch(query);
    }
  }

  performWebSearch(query: string) {
    
    const encodedQuery = encodeURIComponent(query);
    window.open(`https://www.google.com/search?q=${encodedQuery}`, '_blank');
  }
}
