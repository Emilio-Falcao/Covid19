import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EstadosComponent } from './pages/estados/estados.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { ContinenteComponent } from './pages/continente/continente.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EstadosComponent,
    MenuComponent,
    ContinenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
