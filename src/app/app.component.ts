import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';  
import { SharedModule } from './shared/shared.module';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public isConnected : boolean = false;

  constructor(private authService : AuthService, private router: Router, private snackBar: MatSnackBar) {

  }

  logout() {
    this.router.navigate(['/home']);
    this.authService.logout();
<<<<<<< HEAD
    this.snackBar.open('Already Gone ? We Hope to see you again soon', '', { duration: 5000 })
=======
>>>>>>> af317dc5ff9cffbd2f5bf29d7109c5822ec4a276
  }

  ngOnInit() {
   this.authService.isLoggin().subscribe(authStatus => {
      if (authStatus == true) {
        this.router.navigate(['/home']);
        return this.isConnected = true;
      }
      else {
        return this.isConnected = false;
      }
    });
  }
}
