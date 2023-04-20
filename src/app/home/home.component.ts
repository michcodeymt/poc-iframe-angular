import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IframeComponent} from "../iframe/iframe.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @ViewChild('iframe') iframe!: ElementRef;

  userData = {
    username: "ymontanez",
    document: "46177279",
    birthdate: "1990-01-01",
    clinicHistory: "0565",
    phone: "969969996",
    email: "ymontanez@gmail.com"
  };

  sendUserData() {
    const iframeWindow = this.iframe.nativeElement.contentWindow;
    iframeWindow.postMessage(this.userData, 'http://localhost:3000');
  }
}
