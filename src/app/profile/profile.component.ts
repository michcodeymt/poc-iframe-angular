import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  /*userData = {
    username: "ymontanez",
    document: "46177279",
    birthdate: "1990-01-01",
    clinicHistory: "0565",
    phone: "969969996",
    email: "ymontanez@gmail.com"
  };*/
  userData: any;
  constructor() { }

  ngOnInit(): void {
    window.addEventListener('message', (event) => {
      if (event.data.type === 'USER_PARAMS') {
        this.userData = event.data.userData;
        console.log("userData", this.userData);
      }
    });
  }

  redirectToReact() {
    console.log('Confirmación desde el iFrame');
    // enviar un mensaje al padre para que redireccione a la página de React
    window.parent.postMessage({
      type: 'REDIRECT_TO_ROUTE',
      route: 'about',
      param: 'parametro1'
      },
      '*');
  }
}
