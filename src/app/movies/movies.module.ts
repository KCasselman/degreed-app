import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from './services/movies.service';
import { MoviesSubjectService } from './services/movies-subject.service';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesFiltersComponent } from './components/movies-filters/movies-filters.component';



@NgModule({
  declarations: [MoviesListComponent, MoviesFiltersComponent],
  imports: [
    CommonModule
  ],
  exports: [MoviesListComponent, MoviesFiltersComponent],
  providers: [MoviesService, MoviesSubjectService]
})
export class MoviesModule { }
