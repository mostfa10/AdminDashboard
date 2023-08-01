import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private http:HttpClient) {}// relation avec backend

  allentreprises(){
   return this.http.get(`${environment.baseDonnee}/entreprise`)
  }
  deleteE(id:any){
    return this.http.delete(`${environment.baseDonnee}/entreprise/${id}`)
   }
   confirmentreprise(entId:any){
    return this.http.put(`${environment.baseDonnee}/entreprise/${entId}`,{ confirmed: true })
   }
   
  //  updateE(id:any){
  //   return this.http.put(`${environment.baseDonnee}/entreprise/${id}`)
  //  }
}