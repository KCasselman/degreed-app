import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieMetadata } from '../../models/movie-metadata';
import { MoviesSubjectService } from '../../services/movies-subject.service';

@Component({
    selector: 'app-movies-list',
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.sass']
})

export class MoviesListComponent implements OnInit {
    movieMetadata$: Observable<MovieMetadata[] | null>;
    
    constructor(private moviesSubjectService: MoviesSubjectService) {
        this.movieMetadata$ = this.moviesSubjectService.moviesMetadata$
    }

    ngOnInit() {
        const searchParameter = 'Batman';
        this.moviesSubjectService.getMovies(searchParameter);
    }

    getMovies() {
        this.moviesSubjectService.getMovies('Batman');
    }
}