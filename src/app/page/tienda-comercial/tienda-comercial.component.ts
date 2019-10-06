import { Component, OnInit } from '@angular/core';
import { Tienda } from './../../model/tienda';


@Component({
  selector: 'app-tienda-comercial',
  templateUrl: './tienda-comercial.component.html',
  styleUrls: ['./tienda-comercial.component.scss']
})
export class TiendaComercialComponent implements OnInit {

  tienda:any = Tienda;

  constructor() { }

  ngOnInit() {
    this.tienda = new Tienda("Mary","Cosmeticos bla bla ...","");
  }

}