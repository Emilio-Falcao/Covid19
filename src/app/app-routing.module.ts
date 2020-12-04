import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Continente } from './continente';
import { ContinenteComponent } from './pages/continente/continente.component';
import { EstadosComponent } from './pages/estados/estados.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'estados', component:EstadosComponent},
  {path:'continente', component:ContinenteComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
