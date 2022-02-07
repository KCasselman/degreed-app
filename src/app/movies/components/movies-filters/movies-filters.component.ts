import { Component, OnInit } from '@angular/core';
import { MovieFilters } from '../../constants.ts/movies-filters';
import { MoviesSubjectService } from '../../services/movies-subject.service';

@Component({
    selector: 'app-movies-filters',
    templateUrl: './movies-filters.component.html',
    styleUrls: ['./movies-filters.component.scss']
})

export class MoviesFiltersComponent implements OnInit {
    movieFilters: typeof MovieFilters = MovieFilters;
    constructor(private moviesSubjectService: MoviesSubjectService) { }

    ngOnInit() { }

    getFilteredMovies(movieFilter: MovieFilters) {
        this.moviesSubjectService.getFilteredMoviesByYear(movieFilter);
    }
}