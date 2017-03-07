import { Component, OnInit, OnDestroy } from '@angular/core';
import { NlpStreamService } from '../../services/nlp-stream.service';

@Component({
  selector: 'app-messages-board',
  templateUrl: './messages-board.component.html',
  styleUrls: ['./messages-board.component.css'],
  providers: [NlpStreamService]
})
export class MessagesBoardComponent implements OnInit, OnDestroy {

  messages = [];
  connection;
  message;

  constructor(private nlpStreamService: NlpStreamService) { }

  sendMessage() {
    this.nlpStreamService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.connection = this.nlpStreamService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
