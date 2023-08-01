import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  allategory(){
    return this.http.get(`${environment.baseDonnee}/category`)
  }
  deleteC(id:any){
    return this.http.delete(`${environment.baseDonnee}/category/${id}`)
  }
  createC(cat:any){
    return this.http.post(`${environment.baseDonnee}/category`,cat)
  }
}
