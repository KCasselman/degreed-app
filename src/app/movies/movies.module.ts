import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from './services/movies.service';
import { MoviesSubjectService } from './services/movies-subject.service';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesFiltersComponent } from './components/movies-filters/movies-filters.component';
import ButtonComponent from 'src/stories/button.component';

@NgModule({
  declarations: [MoviesListComponent, MoviesFiltersComponent, ButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [MoviesListComponent],
  providers: [MoviesService, MoviesSubjectService]
})
export class MoviesModule { }
