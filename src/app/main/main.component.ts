import { Component } from '@angular/core';
import { AuthGoogleService } from '../auth-google.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(
    private authGoogleService: AuthGoogleService,
    private router: Router
  ) { }

  showData() {
    const data = JSON.stringify(this.authGoogleService.getProfile())

    console.log(data);
  }

  logOut() {
    this.authGoogleService.logout();
    this.router.navigate(['login']);
  }

}
