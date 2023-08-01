import { Component, OnInit } from '@angular/core';
import { OffresService } from 'src/app/services/offres.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-offre',
  templateUrl: './list-offre.component.html',
  styleUrls: ['./list-offre.component.css']
})
export class ListOffreComponent implements OnInit {
  offres:any
  r:number=1
  currentPage = 1;
  perPage = 2;

  constructor(private offre:OffresService) { }
 


  ngOnInit(): void {
    this.loadOffres()
  }
  confirmOffre(offreId: string) {
    this.offre.confirmOffre(offreId).subscribe(
      (updatedOffre:any) => {
        console.log('Offre confirmée avec succès:', updatedOffre);
        // Mettez à jour les offres affichées dans le tableau si nécessaire
      },
      (error:any) => {
        console.error('Erreur lors de la confirmation de l\'offre:', error);
      }
    );
  }
  loadOffres(): void {
    this.offre.getOffres(this.currentPage, this.perPage)
      .subscribe((offres:any) => {
        this.offres = offres;
      });
  }

  nextPage(): void {
    this.currentPage++;
    this.loadOffres();
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadOffres();
    }
  }
  // listoffres(){
  //   this.offre.alloffres().subscribe((res:any)=>{
  //     this.offres=res["data"]
  //     console.log('liste offres',this.offres)
  //   })
  // }
  deletO(id:any){
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
        this.offre.deleteoffre(id).subscribe((res:any)=>{// subscribe pour donne l accees ala BD
          console.log(res)
          this.loadOffres()
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
