import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CondidatService {

  constructor(private http:HttpClient) { }
  allcondidat(){
   return this.http.get(`${environment.baseDonnee}/condidat`)
  }
  deleteC(id:any){
    return this.http.delete(`${environment.baseDonnee}/condidat/${id}`)
  }
  confirmCondidat(id: string) {
    
    return this.http.put(`${environment.baseDonnee}/condidat/${id}`,{ confirmed: true })
  }
}
