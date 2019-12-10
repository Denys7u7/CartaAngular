import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule} from '@angular/router';
import { from } from 'rxjs';
import { Body2Component } from './body2/body2.component';
import { Body3Component } from './body3/body3.component';
import { Body4Component } from './body4/body4.component';

const routes : Routes = [
  {
    path:'body', component: BodyComponent
  },
  {
    path:'body2', component: Body2Component
  },
  {
    path:'body3', component: Body3Component
  },
  {
    path:'body4', component: Body4Component
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'body'
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    Body2Component,
    Body3Component,
    Body4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
