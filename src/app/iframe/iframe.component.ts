import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})

export class IframeComponent implements OnInit {
  @ViewChild('iframeRef') iframe: ElementRef | undefined;



  constructor() {
    window.addEventListener('message', this.sendDataToIframe.bind(this));
  }

  ngOnInit() {
  }

  sendDataToIframe(userData: any) {
    const iframe = this.iframe?.nativeElement;
    if (iframe) {
      iframe.addEventListener('load', () => {
        iframe.contentWindow.postMessage(userData, '*');
      });
      iframe.src = 'http://localhost:3000/profile';
    }
  }
}

