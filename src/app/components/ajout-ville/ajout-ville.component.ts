import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VilleService } from 'src/app/services/ville.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajout-ville',
  templateUrl: './ajout-ville.component.html',
  styleUrls: ['./ajout-ville.component.css']
})
export class AjoutVilleComponent implements OnInit {
  villes:any
  formB!:FormGroup
  constructor(private ville:VilleService, private route:ActivatedRoute, private formD:FormBuilder
    
    ,
    private router:Router) { }// activate router lorsquon utlulise id dans url /id


  ngOnInit(): void { 
    this.formB = this.formD.group(
    {
      place: ['', Validators.required]
     

    })
 this.listeville()
}

listeville(){
  this.ville.allvilles().subscribe((res:any)=>{
    this.villes=res["data"]
    console.log("listes villes",this.villes)

  })
}
createV(){
  this.ville.createV(this.formB.value).subscribe((res:any)=>{
   
    console.log("ville added",res)
  Swal.fire('ville added')

  })
  this.router.navigateByUrl('/home/listville')//traj3k l liste
}

}

