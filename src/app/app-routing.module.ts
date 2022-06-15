import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetalleComponent } from './components/detalle/detalle.component';

const routes: Routes = [
  { title: 'Dashboard', path: '', component: DashboardComponent },
  { title: 'Detalle', path: 'detalle', component: DetalleComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
