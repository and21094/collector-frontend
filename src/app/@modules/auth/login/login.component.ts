import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base.component';
import { UserService } from '../../../@core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent extends BaseComponent implements OnInit {

  public user = {
    email: '',
    password: ''
  };

  constructor(protected service: UserService) {
    super();
  }

  ngOnInit() {
  }

  login() {
    this.loading = true;

    const logged = this.service.login(this.user.email, this.user.password);

    if (logged) {
      this.loading = false;
      alert('success');
    } else {
      this.loading = false;
      alert('error');
    }

    // this.service.login(this.user.email, this.user.password)
    // .subscribe((response) => {
    //   this.loading = false;
    //   if (response && response.result === true) {
    //     // window.location.replace('/dashboard');
    //   } else {
    //     // this.generalError = response.errors.general[0];
    //     // this.errors = response.errors;
    //     // this.loading = false;
    //   }
    // });

  }

}
