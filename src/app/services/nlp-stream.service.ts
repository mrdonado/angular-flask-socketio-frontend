import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class NlpStreamService {

  private url: string;
  private socket;

  constructor() {
    this.url = 'http://127.0.0.1:5000';
  }

  sendMessage(message) {
    this.socket.emit('testnlp', message);
  }

  getMessages() {
    const observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconect();
      };
    });
    return observable;
  }
}
