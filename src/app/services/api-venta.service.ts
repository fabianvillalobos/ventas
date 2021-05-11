import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../Models/Response';
import { Venta } from '../Models/Venta';

const httpOptions = {
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiVentaService {

  url: string = 'http://localhost:38444/Api/Venta';

  constructor(private _http: HttpClient) { }

  add(venta: Venta): Observable<Response>{
    return this._http.post<Response>(this.url, venta, httpOptions)
  }
}
