import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './vistas/login/login.component';
import {RegisterComponent} from './vistas/register/register.component';
import {DashboardComponent} from './vistas/dashboard/dashboard.component';
import {NuevoComponent} from './vistas/nuevo/nuevo.component';
import {EditarComponent} from './vistas/editar/editar.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'nuevo', component:NuevoComponent},
  {path:'editar', component:EditarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// Exportamos a app.module.ts
export const routingComponents = [LoginComponent, 
  RegisterComponent, DashboardComponent, NuevoComponent, EditarComponent]