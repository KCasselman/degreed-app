import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take, zip } from 'rxjs';
import { MovieFilters } from '../constants.ts/movies-filters';
import { Movie } from '../models/movie';
import { MovieMetadata } from '../models/movie-metadata';
import { MoviesService } from './movies.service';

@Injectable()
export class MoviesSubjectService {
    private moviesMetadataBS = new BehaviorSubject<MovieMetadata[]>(null);
    private lastSearchParameter: string = '';
    private allMovies: MovieMetadata[];

    moviesMetadata$ = this.moviesMetadataBS.asObservable();


    constructor(private moviesService: MoviesService) { }
    
    getMovies(searchParameter: string): Observable<MovieMetadata[]> {
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

    getFilteredMoviesByYear(movieFilter: MovieFilters): void{
        let firstThreeNumbersOfYear;

        if (movieFilter === MovieFilters.nineteenEighties) {
            firstThreeNumbersOfYear = '198';
        } else if (movieFilter === MovieFilters.nineteenNineties) {
            firstThreeNumbersOfYear = '199';
        } else if (movieFilter === MovieFilters.twoThousands) {
            firstThreeNumbersOfYear = '200';
        } else if (movieFilter === MovieFilters.twoThousandTens) {
            firstThreeNumbersOfYear = '201';
        }

        const filteredFilms = this.allMovies.filter((movie: MovieMetadata) => movie.year.slice(0, 3) === firstThreeNumbersOfYear);
            
        this.moviesMetadataBS.next(filteredFilms);
    }

    private getMoviesMetadata(movies: Movie[]) {
        const numberOfMoviesToRetrieve = 10;
        const first10Movies = movies.slice(0, numberOfMoviesToRetrieve);

        const moviesMetadata$: Observable<MovieMetadata>[] = first10Movies.map((movie: Movie) => this.moviesService.getMovieMetadataById(movie.imdbId));

        zip(moviesMetadata$).subscribe((moviesMetadata: MovieMetadata[]) => {
            this.allMovies = moviesMetadata;
            this.moviesMetadataBS.next(moviesMetadata)
        });
    }
}