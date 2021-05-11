import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './Models/usuario';
import { ApiAuthService } from './services/apiAuth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ventas';
  usuario: Usuario;

  constructor(public apiAuthService: ApiAuthService, private router: Router){
    this.apiAuthService.usuario.subscribe(res => {
      this.usuario = res;
    });
  }

  logOut(){
    this.apiAuthService.logOut();
    this.router.navigate(['/login']);
  }
}
