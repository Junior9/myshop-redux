import { Component, OnInit } from '@angular/core';
import { Tienda } from './../../model/tienda';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {

  tienda:Tienda;

  constructor() { }

  ngOnInit() {
    this.tienda = new Tienda("","","");
  }

  crear(tiendaForm:Tienda){
    console.log(tiendaForm)
  }
}