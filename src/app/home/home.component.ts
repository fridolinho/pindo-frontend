import { Component, OnInit } from '@angular/core';
import { SendService } from '../send.service';
import * as contact from './bebe.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  sender: string;
  message: string;

  constructor(private sendService: SendService) { }

  ngOnInit() {
  }

  sendSMS() {
    const receiver = (contact as any).default;
    receiver.map(user => {
      const phone = user.phone;
      this.sendService.send({to: `+250${phone}`, sender: this.sender, text: this.message}).then(r => {
        console.log('data');
      }) ;
    });
  }
}
