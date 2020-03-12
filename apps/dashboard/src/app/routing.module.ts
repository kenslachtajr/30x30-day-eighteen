import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComputersComponent } from './computers/computers.component';
import { ComputersItemComponent } from './computers/computers-item/computers-item.component';
import { LoginComponent } from '@ngrx-computers/ui-login';
import { WildComponent } from './wild/wild.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'wild', component: WildComponent },
  { path: 'computers', component: ComputersComponent },
  { path: 'computers/:id', component: ComputersItemComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
