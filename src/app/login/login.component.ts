import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAuthService } from '../services/apiAuth.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(public apiAuth: ApiAuthService, private router: Router, private formBuilder: FormBuilder) {
    /*if(this.apiAuth.usuarioData){
      this.router.navigate(['/']);
    }*/
   }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginForm.value); // Aquí no funciona
    this.apiAuth.login(this.loginForm.value).subscribe(response => {
      if(response.exito === 1){
        this.router.navigate(['/']);
      }
    });
  }

}
