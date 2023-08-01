import { Component, OnInit } from '@angular/core';
import { CondidatService } from 'src/app/services/condidat.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listcondidat',
  templateUrl: './listcondidat.component.html',
  styleUrls: ['./listcondidat.component.css']
})
export class ListcondidatComponent implements OnInit {
  condidats:any
  constructor(private condidat:CondidatService) { }

  ngOnInit(): void {
    this.Listcondidats()
  }
   confirmCondidat(offreId: string) {
    this.condidat.confirmCondidat(offreId).subscribe(
      (updatedC:any) => {
        console.log('condidat confirmée avec succès:', updatedC);
        // Mettez à jour les offres affichées dans le tableau si nécessaire
      },
      (error:any) => {
        console.error('Erreur lors de la confirmation de l\'condidat:', error);
      }
    );
  }
  Listcondidats(){
    this.condidat.allcondidat().subscribe((res:any)=>{
      this.condidats=res["data"]
      console.log('list of condidats',this.condidats)
    })
  }
  deletU(id:any){
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
        this.condidat.deleteC(id).subscribe((res:any)=>{// subscribe pour donne l accees ala BD
          console.log(res)
          this.Listcondidats()
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
