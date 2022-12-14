import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationLayoutComponent } from './Layout/authentication-layout/authentication-layout.component';
import { AdminLayoutComponent } from './Layout/admin-layout/admin-layout.component';
import { SharedModule } from './shared/shared.module';
import { AdminComponent } from './app/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationLayoutComponent,
    AdminLayoutComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
