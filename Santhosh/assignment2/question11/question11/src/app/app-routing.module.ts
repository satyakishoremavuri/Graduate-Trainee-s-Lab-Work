import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: home },
  { path: 'about', loadChildren: () => import("./about/about.module").then(x => x.aboutModule) },
  { path: 'contactus', loadChildren: () => import("./contactus/contactus.module").then(x => x.ContactusModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

