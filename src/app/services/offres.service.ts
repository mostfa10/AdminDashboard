import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OffresService {

  constructor(private http:HttpClient) {}// relation avec backend

  alloffres(){
   return this.http.get(`${environment.baseDonnee}/offre/all`)
  }
  deleteoffre(id:any){
    return this.http.delete(`${environment.baseDonnee}/offre/${id}`)
  }
  confirmOffre(offreId: string) {
    
    return this.http.put(`${environment.baseDonnee}/offre/${offreId}`,{ confirmed: true })
  }
  getOffres(page: number, perPage: number) {
    return this.http.get(`${environment.baseDonnee}/offre?page=${page}&perPage=${perPage}`);
  }
}

