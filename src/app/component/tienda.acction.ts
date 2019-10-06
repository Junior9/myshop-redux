import { Action } from '@ngrx/store';

export const TIENDAS = '[tienda] Tiendas'

export class TiendasAction implements Action{
	readonly type = TIENDAS;
}

export type actions =  TiendasAction ;