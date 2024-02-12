import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { FormsModule } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService){}

  ngOnInit(){

  }

  login(){
    if(this.email == ''){
      alert('Please Enter Email')
      return;
    }
    if(this.password == ''){
      alert('Please Enter Password')
      return;
    }
    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
