import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './componentes/error404/error404.component';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { PanelComponent } from './componentes/panel/panel.component';
import { RegistrateComponent } from './componentes/registrate/registrate.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  {path: '', component: IndexComponent, canActivate:[GuardGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'panel', component: PanelComponent},
  {path: 'registrate', component: RegistrateComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
