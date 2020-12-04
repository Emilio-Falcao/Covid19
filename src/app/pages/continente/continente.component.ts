import { Component, OnInit } from '@angular/core';
import { Continente } from 'src/app/continente';
import { DadosCont } from 'src/mock-cont';

@Component({
  selector: 'app-continente',
  templateUrl: './continente.component.html',
  styleUrls: ['./continente.component.css']
})
export class ContinenteComponent implements OnInit {

  DetalhesContinente=DadosCont;

 

  

  constructor() { }

  ngOnInit(): void {
  }

 

}
