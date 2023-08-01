import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-entreprise',
  templateUrl: './list-entreprise.component.html',
  styleUrls: ['./list-entreprise.component.css']
})
export class ListEntrepriseComponent implements OnInit {
entreprises:any
  constructor(private ent:EntrepriseService) { }

  ngOnInit(): void {
    this.ListEntreprises()
  }
  ListEntreprises(){
    this.ent.allentreprises().subscribe((res:any)=>{
      this.entreprises=res["data"]
      console.log('list of entreprises',this.entreprises)
    })
  }
  confirmEntreprise(entId: string) {
    this.ent.confirmentreprise(entId).subscribe(
      (updateEntreprise:any) => {
        console.log('Offre confirmée avec succès:', updateEntreprise);
        // Mettez à jour les offres affichées dans le tableau si nécessaire
      },
      (error:any) => {
        console.error('Erreur lors de la confirmation de l\'entreprise:', error);
      }
    );
  }
  deleteE(id:any){
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
        this.ent.deleteE(id).subscribe((res:any)=>{// subscribe pour donne l accees ala BD
          console.log(res)
          this.ListEntreprises()
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  // updateE(id:any){
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to confirmed this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.ent.updateE(id).subscribe((res:any)=>{ // subscribe pour donne l accees ala BD
  //         console.log(res)
  //         this.ListEntreprises()
  //       })
  //       Swal.fire(
  //         'confirmed!',
  //         'Your file has been confirmed.',
  //         'success'
  //       )
  //     }
  //   })
  // }
}
