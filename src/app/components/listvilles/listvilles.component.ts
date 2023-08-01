import { Component, OnInit } from '@angular/core';
import { VilleService } from 'src/app/services/ville.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listvilles',
  templateUrl: './listvilles.component.html',
  styleUrls: ['./listvilles.component.css']
})
export class ListvillesComponent implements OnInit {
  villes:any

  constructor(private ville:VilleService) { }
  

  ngOnInit(): void {
    this.listvilles()
  }
listvilles(){
  this.ville.allvilles().subscribe((res:any)=>{
    this.villes=res["data"]
    console.log('list of villes',this.villes)
  })
}

deleteV(id:any){
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
      this.ville.deleteV(id).subscribe((res:any)=>{// subscribe pour donne l accees ala BD
        console.log(res)
        this.listvilles()
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

