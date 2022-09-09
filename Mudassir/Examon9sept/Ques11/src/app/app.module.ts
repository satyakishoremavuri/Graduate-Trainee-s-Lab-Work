import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  { path: '', component: HomeComponent},
  {path :'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contactus', component: ContactusComponent}

];

@NgModule({
  declarations: [

    LayoutComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
