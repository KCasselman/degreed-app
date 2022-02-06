import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take, zip } from 'rxjs';
import { Movie, MovieDto, MovieSearchResultDto } from '../models/movie'; // KC - fix imports to barrel files
import { MovieMetadata } from '../models/movie-metadata';
import { MoviesService } from './movies.service';

@Injectable()
export class MoviesSubjectService {
    private moviesMetadataBS = new BehaviorSubject<MovieMetadata[] | null>(null); // KC - rename?
    private lastSearchParameter: string = '';

    moviesMetadata$ = this.moviesMetadataBS.asObservable();

    constructor(private moviesService: MoviesService) { }
    
    getMovies(searchParameter: string): Observable<MovieMetadata[] | null> {
        // Check if we're requesting for movies that we already have
        if (this.lastSearchParameter !== searchParameter) {
            this.lastSearchParameter = searchParameter;
         
            this.moviesService.getMoviesBySearch(searchParameter)
            .pipe(take(1))
            .subscribe((movies: Movie[]) => {
                this.getMoviesMetadata(movies);
            });
        }

        return this.moviesMetadata$;
    }

    getFilteredMoviesByYear(year: any) {
        
    }

    private getMoviesMetadata(movies: Movie[]) {
        const numberOfMoviesToRetrieve = 10;
        const first10Movies = movies.slice(0, numberOfMoviesToRetrieve);

        const moviesMetadata$: Observable<MovieMetadata>[] = first10Movies.map((movie: Movie) => this.moviesService.getMovieMetadataById(movie.imdbId));

        zip(moviesMetadata$).subscribe((moviesMetadata: MovieMetadata[]) => this.moviesMetadataBS.next(moviesMetadata));
    }
}