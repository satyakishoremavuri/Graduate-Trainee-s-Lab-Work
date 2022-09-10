import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';




const routes: Routes = [
  {path : '', component: HomeComponent},
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  {path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)},
  {path: 'contactus', loadChildren: () => import('./contactus/contactus.module').then(m => m.ContactusModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
