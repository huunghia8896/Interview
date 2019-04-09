import { Component, OnInit } from '@angular/core';
import { ListMessage } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  listMessage = ListMessage;
  employeeName = 'anicdh';

  constructor() {
    
  }

  ngOnInit() {
  }

  isShowShortenedName(listMessage: any, i: number) {
    if (i === 0 || i === listMessage.length - 1) {
      return true;
    }
    if (i < 0) {
      return false;
    }
    return listMessage[i].sender.username !== listMessage[i - 1].sender.username;
  }

  isShowCreatedDate(listMessage: any, i: number) {
    if (i === listMessage.length - 1) {
      return true;
    }
    return listMessage[i].sender.username !== listMessage[i + 1].sender.username;
  }
}
