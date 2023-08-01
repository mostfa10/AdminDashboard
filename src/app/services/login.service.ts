import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  signin(login:any){
    return this.http.post(`${environment.baseDonnee}/auth/signin`,login)
  }

  signup(register:any){
    return this.http.post(`${environment.baseDonnee}/auth/signup`,register)
  }


}
