import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listcategory',
  templateUrl: './listcategory.component.html',
  styleUrls: ['./listcategory.component.css']
})
export class ListcategoryComponent implements OnInit {
  categories:any

  constructor(private category:CategoryService) { }
  

  ngOnInit(): void {
    this.listecategorie()
  }

  listecategorie(){
    this.category.allategory().subscribe((res:any)=>{
      this.categories=res["data"]
      console.log("listes categories",this.categories)

    })
  }
  deleteC(id:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.category.deleteC(id).subscribe((res:any)=>{// subscribe pour donne l accees ala BD
          console.log(res)
          this.listecategorie()
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
}
