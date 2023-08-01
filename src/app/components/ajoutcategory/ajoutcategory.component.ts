import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-ajoutcategory',
  templateUrl: './ajoutcategory.component.html',
  styleUrls: ['./ajoutcategory.component.css']
})
export class AjoutcategoryComponent implements OnInit {

  categories:any
  formB!:FormGroup
  constructor(private category:CategoryService, private route:ActivatedRoute, private formD:FormBuilder
    ,
    private router:Router) { }// activate router lorsquon utlulise id dans url /id


  ngOnInit(): void { 
    this.formB = this.formD.group(
    {
      name: ['', Validators.required],
      description:  ['', Validators.required],
     

    })
 this.listecategorie()
}

listecategorie(){
  this.category.allategory().subscribe((res:any)=>{
    this.categories=res["data"]
    console.log("listes sub",this.categories)

  })
}
createC(){
  this.category.createC(this.formB.value).subscribe((res:any)=>{
   
    console.log("category added",res)
  Swal.fire('category added')

  })
  this.router.navigateByUrl('/home/listcategory')//traj3k l liste
}

}
