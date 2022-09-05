import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { TestClass } from './service/test';

@NgModule({
  declarations: [
    // AppComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TestClass],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
