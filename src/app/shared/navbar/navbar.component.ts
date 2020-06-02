import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../../core/auth.service';
import { User } from '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user$: Observable<{ user: User, loaded: boolean }>;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.user$ = this.auth.user$;
  }

  signIn() {
    this.auth.googleSignin();
  }

  signOut() {
    this.auth.signOut();
  }

}
