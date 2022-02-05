import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from './services/movies.service';
import { MoviesSubjectService } from './services/movies-subject.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [MoviesService, MoviesSubjectService]
})
export class MoviesModule { }
