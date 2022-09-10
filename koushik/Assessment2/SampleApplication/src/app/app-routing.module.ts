import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'about', 
loadChildren:()=> import('./about/about.module').then(m => m.AboutModule)},
  {path:'contactus' ,
  loadChildren:()=> import('./contactus/contactus.module').then(m => m.ContactusModule)},
  {path:'home',
  loadChildren:()=> import('./home/home.module').then(m => m.HomeModule)},
  {path: 'services', 
  loadChildren:()=> import('./services/services.module').then(m => m.ServicesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

