import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListOffreComponent } from './components/list-offre/list-offre.component';
import { ListvillesComponent } from './components/listvilles/listvilles.component';
import { ListEntrepriseComponent } from './components/list-entreprise/list-entreprise.component';
import { ListskilsComponent } from './components/listskils/listskils.component';
import { ListcategoryComponent } from './components/listcategory/listcategory.component';
import { ListcondidatComponent } from './components/listcondidat/listcondidat.component';
import { AjoutVilleComponent } from './components/ajout-ville/ajout-ville.component';
import { AjoutcategoryComponent } from './components/ajoutcategory/ajoutcategory.component';
import { AjoutskilsComponent } from './components/ajoutskils/ajoutskils.component';
import { ProfilComponent } from './components/profil/profil.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:"home",component:HomeComponent,children:[
    {path:"profile",component:ProfilComponent},
    {path:"listO",component:ListOffreComponent},
    {path:"listville",component:ListvillesComponent},
    {path:"listentreprises",component:ListEntrepriseComponent},
    {path:"listeskils",component:ListskilsComponent},
    {path:"listcategory",component:ListcategoryComponent},
    {path:"listcondidat",component:ListcondidatComponent},
    {path:"ajoutV",component:AjoutVilleComponent},
    {path:"ajoutS",component:AjoutskilsComponent},
    {path:"login",component:LoginComponent},
    {path:"ajoutC",component:AjoutcategoryComponent}
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
