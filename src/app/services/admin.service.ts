import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  allAdmin(){
    this.http.get(`${environment.baseDonnee}/admin`)
  }

  deleteA(id:any){
    return this.http.delete(`${environment.baseDonnee}/admin/${id}`)
  }
  createA(cat:any){
    return this.http.post(`${environment.baseDonnee}/admin`,cat)
  }
}
