import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ListOffreComponent } from './components/list-offre/list-offre.component';
import { ListEntrepriseComponent } from './components/list-entreprise/list-entreprise.component';
import { ListcategoryComponent } from './components/listcategory/listcategory.component';
import { ListskilsComponent } from './components/listskils/listskils.component';
import { ListvillesComponent } from './components/listvilles/listvilles.component';
import { ListcondidatComponent } from './components/listcondidat/listcondidat.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjoutVilleComponent } from './components/ajout-ville/ajout-ville.component';
import { AjoutcategoryComponent } from './components/ajoutcategory/ajoutcategory.component';
import { AjoutskilsComponent } from './components/ajoutskils/ajoutskils.component';
import { ProfilComponent } from './components/profil/profil.component';
import { LoginComponent } from './components/login/login.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    ListOffreComponent,
    ListEntrepriseComponent,
    ListcategoryComponent,
    ListskilsComponent,
    ListvillesComponent,
    ListcondidatComponent,
    AjoutVilleComponent,
    AjoutcategoryComponent,
    AjoutskilsComponent,
    ProfilComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
