import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, zip } from 'rxjs';
import { Movie, MovieSearchResult } from '../models/movie'; // KC - fix imports to barrel files
import { MovieMetadata } from '../models/movie-metadata';
import { MoviesService } from './movies.service';

@Injectable()
export class MoviesSubjectService {
    private moviesMetadataBS = new BehaviorSubject<MovieMetadata[] | null>(null); // KC - rename?
    private lastSearchParameter: string = '';

    moviesMetadata$ = this.moviesMetadataBS.asObservable();

    constructor(private moviesService: MoviesService) { }

    // get moviesMetaData$(): Observable<MovieMetadata[] | null> {
    //     const stateHasNoValue = !this.moviesMetadataBS?.value;
        
    //     if (stateHasNoValue) {
    //         this.getMovies(...);
    //     }

    //     return this.moviesMetadataBS.asObservable();
    // }

    getMovies(searchParameter: string): Observable<MovieMetadata[] | null> {
        // Check if we're requesting for movies that we already have
        if (this.lastSearchParameter !== searchParameter) {
            this.lastSearchParameter = searchParameter;
         
            this.moviesService.getMoviesBySearch(searchParameter).subscribe((movieSearchResult: MovieSearchResult) => {
                this.getMoviesMetadata(movieSearchResult);
            });
        }

        return this.moviesMetadata$;
    }

    private getMoviesMetadata(movieSearchResult: MovieSearchResult) {
        const numberOfMoviesToRetrieve = 10;
        const first10Movies = movieSearchResult.Search.slice(0, numberOfMoviesToRetrieve);

        const moviesMetadata$: Observable<MovieMetadata>[] = first10Movies.map((movie: Movie) => this.moviesService.getMovieMetadataById(movie.imdbID));

        zip(moviesMetadata$).subscribe((moviesMetadata: MovieMetadata[]) => this.moviesMetadataBS.next(moviesMetadata));
    }
}