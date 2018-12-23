import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  returnUrl: string = '';
  email = 'singh.aakash1801@gmail.com';
  password = 'sky123';

  constructor(private _router: Router, private _route: ActivatedRoute, private _authService: AuthenticationService,
  ) {
  }

  ngOnInit() {

  }

  submit() {
   // this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '';
  /*  this._authService.login.subscribe(data => {
        if (data.res === true) {
          this._router.navigate(['/view']);
        } else {
          this._router.navigate(['/login']);
        }
      },
      error => {
      });*/
  }
}
