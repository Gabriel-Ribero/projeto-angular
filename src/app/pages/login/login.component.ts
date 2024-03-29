import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Input() userName: string;

  constructor(private router: Router) {

  }

  login() {
    sessionStorage.setItem('usuario', this.userName);
    this.router.navigate(['/home']);
  }
}
