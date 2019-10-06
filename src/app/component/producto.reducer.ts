import * as fromProdutos from './producto.action';

export function ProductoReducer(
	state:any=[
        {id:"1",nombre:"jabon",descripcion:"Mary Kay Cosmeticos",img:""},
        {id:"2",nombre:"jabon",descripcion:"Coches de lujo",img:""}
        ],action:fromProdutos.actions)
  {

	switch (action.type) {

		case fromProdutos.PRODUCTOS:
			return state;

		default:
			return state;
	}
}