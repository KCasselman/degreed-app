import { Component } from '@angular/core';
import { MovieFilters } from '../../constants.ts/movies-filters';
import { MoviesSubjectService } from '../../services/movies-subject.service';

@Component({
    selector: 'app-movies-filters',
    templateUrl: './movies-filters.component.html',
    styleUrls: ['./movies-filters.component.scss']
})

export class MoviesFiltersComponent {
    movieFilters: typeof MovieFilters = MovieFilters;
    currentFilter: MovieFilters;
    constructor(private moviesSubjectService: MoviesSubjectService) { }

    getFilteredMovies(movieFilter: MovieFilters) {
        this.currentFilter = movieFilter;
        this.moviesSubjectService.getFilteredMoviesByYear(movieFilter);
    }
}