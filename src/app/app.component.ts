import { User } from './user';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'nm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'N-Mart';
  user:User;
  usersubscribe:Subscription;
  constructor(private authService:AuthService,private router:Router){
    this.authService.user.subscribe(user$ = > (this.user = user$));
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
