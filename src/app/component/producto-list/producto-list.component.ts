import { Component, OnInit } from '@angular/core';
import { Store,Action } from '@ngrx/store';
import { AppState } from './../../app.reducer';
import { Produto } from './../../model/produto';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.scss']
})
export class ProductoListComponent implements OnInit {

  productos:any = Array<Produto>();
  constructor(private store:Store<AppState>) {
    this.store.subscribe(productos=>{
      this.productos = productos["productos"];
      console.log(productos);
		})
   }

  ngOnInit() {
  }

}
