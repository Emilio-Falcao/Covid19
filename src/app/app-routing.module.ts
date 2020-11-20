import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadosComponent } from './pages/estados/estados.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'estados', component:EstadosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
