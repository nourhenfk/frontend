import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {User} from 'src/app/models/user';
import {AuthServiceService} from 'src/app/services/auth-service.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: User = new User(0,'', '', '');

  constructor(private authService: AuthServiceService,
    private router: Router) { }

  ngOnInit(): void {
    //this.authService.isManager();
  }

  signIn(): void {
    this.authService.authenticate(this.user)
      .subscribe(
        res => {
          console.log('Signed in successfully');
          if( this.authService.isManager()){
            this.router.navigate(['/manager']);
          }else if (this.authService.isAdmin())
          this.router.navigate(['/admin']);
          else if (this.authService.isEmployee())
          this.router.navigate(["/employee"])

        },
        err => {
          console.error('Error signing in:', err);

        }
      );
  }


}
