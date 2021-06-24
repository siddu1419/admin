import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddmoviesComponent } from './addmovies/addmovies.component';
import { SeemoviesComponent } from './seemovies/seemovies.component';
import { MoviesComponent } from './movies/movies.component';


@NgModule({
  declarations: [
    AdminComponent,
    AddmoviesComponent,
    SeemoviesComponent,
    MoviesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
  ]
})
export class AdminModule { }
