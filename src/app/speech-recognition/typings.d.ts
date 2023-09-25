// typings.d.ts
declare module 'global' {
    interface Window {
      SpeechRecognition: any;
      webkitSpeechRecognition: any;
    }
  }
  