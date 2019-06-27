import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { ClaimsComponent } from './claims/claims.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'authenticate', component: AuthenticateComponent },
  { path: 'claim', component: ClaimsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
