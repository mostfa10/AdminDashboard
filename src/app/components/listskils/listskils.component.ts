import { Component, OnInit } from '@angular/core';
import { SkilsService } from 'src/app/services/skils.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listskils',
  templateUrl: './listskils.component.html',
  styleUrls: ['./listskils.component.css']
})
export class ListskilsComponent implements OnInit {
  skils:any

  constructor(private skil:SkilsService) { }
  

  ngOnInit(): void {
    this.listeskils()
  }

  listeskils(){
    this.skil.allskils().subscribe((res:any)=>{
      this.skils=res["data"]
      console.log("listes categories",this.skils)

    })
  }
  deleteskils(id:any){
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
        this.skils.deleteskils(id).subscribe((res:any)=>{// subscribe pour donne l accees ala BD
          console.log(res)
          this.listeskils()
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