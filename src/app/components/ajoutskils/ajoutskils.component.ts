import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SkilsService } from 'src/app/services/skils.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajoutskils',
  templateUrl: './ajoutskils.component.html',
  styleUrls: ['./ajoutskils.component.css']
})
export class AjoutskilsComponent implements OnInit {
  skils:any
  formB!:FormGroup
  constructor(private skil:SkilsService, private route:ActivatedRoute, private formD:FormBuilder
    ,private router:Router) { }// activate router lorsquon utlulise id dans url /id


  ngOnInit(): void { 
    this.formB = this.formD.group(
    {
      skil: ['', Validators.required]
    })
 this.listskils()
}

listskils(){
  this.skil.allskils().subscribe((res:any)=>{
    this.skils=res["data"]
    console.log("listes skils",this.skils)

  })
}
createS(){
  this.skil.CreateS(this.formB.value).subscribe((res:any)=>{

   
    console.log("skils added",res)
  Swal.fire('skils added')

  })
  this.router.navigateByUrl('/home/listeskils')//traj3k l liste
}

}

