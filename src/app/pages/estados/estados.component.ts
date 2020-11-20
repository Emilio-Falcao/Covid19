import { Component, OnInit } from '@angular/core';
import { Dados } from 'src/app/mock-dados';
import { Estado } from 'src/estados';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {

  DetalhesEstado=Dados;

  listaClicada:Estado;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(estado:Estado){
    this.listaClicada = estado;
  }

}
