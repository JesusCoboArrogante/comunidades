import { Routes } from '@angular/router';

import { Ccaa } from './ccaa/ccaa';
import { Provincia } from './provincia/provincia';
import {Poblacion} from './poblacion/poblacion';





export const routes: Routes = [
  { path: 'ccaa', component: Ccaa },   
  { path: 'provincias/:idCcaa', component: Provincia },
  { path: 'poblaciones/:idProvincia', component: Poblacion },
  {path: '', redirectTo: 'ccaa', pathMatch: 'full'},

];