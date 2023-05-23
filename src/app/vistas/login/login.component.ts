import { Component, OnInit} from '@angular/core';

import {FormGroup, FormControl, Validators} from '@angular/forms'
import { ApiService} from '../../servicios/api/api.service'
import { LoginI} from '../../modelos/login/login.interface';
import { ResponseLoginI} from '../../modelos/login/responseLogin.interface';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm = new FormGroup({
    username : new FormControl('user1', Validators.required),
    password : new FormControl('admin', Validators.required)
})


  constructor(private api:ApiService, private router:Router){

  }

  ngOnInit(): void {
    
  }

  onLogin(form:LoginI){
    this.api.loginByUsername(form).subscribe(data =>
      {
      console.log(data);
      })
    // console.log(form)
  }

}
