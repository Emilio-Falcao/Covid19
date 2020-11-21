import { Component, OnInit } from '@angular/core';
import { Mundo } from 'src/app/models/mundo.model';
import { Pais } from 'src/app/models/pais.model';
import { CovidapiService } from 'src/app/services/covidapi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 mundo: Mundo;
  pais: Pais;
  constructor(private apiService: CovidapiService) { }

     async ngOnInit(){
   this.mundo = await this.apiService.getInfoMundo();
   this.pais = await this.apiService.getInfoPais();
  }
  async trocaPais(){
    const { value: inputPais } = await Swal.fire({
      title: 'Informe um País:*',
      input: 'text',
      inputPlaceholder: 'País'
    })
    if (inputPais) {
      this.pais = await this.apiService.getInfoPais(inputPais)
    }
  }
}
