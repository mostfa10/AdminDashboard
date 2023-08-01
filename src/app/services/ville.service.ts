import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor(private http:HttpClient) { }
  allvilles(){
    return this.http.get(`${environment.baseDonnee}/place`)
  }
  deleteV(id:any){
    return this.http.delete(`${environment.baseDonnee}/place/${id}`)
   }
   createV(ville:any){
    return this.http.get(`${environment.baseDonnee}/place`,ville)
   }
}
