import { Action } from '@ngrx/store';

export const PRODUCTOS = '[producto] Productos'

export class ProductosAction implements Action{
	readonly type = PRODUCTOS;
}

export type actions =  ProductosAction ;