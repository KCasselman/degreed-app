import { Injectable, NgModule } from '@angular/core';
import { BehaviorSubject, Observable, take, zip, filter, map } from 'rxjs';
import { MovieFilters } from '../constants.ts/movies-filters';
import { Movie, MovieDto, MovieSearchResultDto } from '../models/movie'; // KC - fix imports to barrel files
import { MovieMetadata } from '../models/movie-metadata';
import { MoviesService } from './movies.service';

@Injectable()
export class MoviesSubjectService {
    private moviesMetadataBS = new BehaviorSubject<MovieMetadata[]>(null); // KC - rename?
    private lastSearchParameter: string = '';
    private allMovies: MovieMetadata[];

    moviesMetadata$ = this.moviesMetadataBS.asObservable();


    constructor(private moviesService: MoviesService) { }
    
    getMovies(searchParameter: string): Observable<MovieMetadata[]> {
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

    getFilteredMoviesByYear(movieFilter: MovieFilters): void{
        // KC - can these if elses be consolidated?
        if (movieFilter === MovieFilters.nineteenEighties) {
            const ninetiesFilms = this.allMovies.filter((movie: MovieMetadata) => movie.year.slice(0, 3) === '198');
            
            this.moviesMetadataBS.next(ninetiesFilms);
        } else if (movieFilter === MovieFilters.nineteenNineties) {
            const ninetiesFilms = this.allMovies.filter((movie: MovieMetadata) => movie.year.slice(0, 3) === '199');
            
            this.moviesMetadataBS.next(ninetiesFilms);
        } else if (movieFilter === MovieFilters.twoThousands) {
            const twoThousandsFilms = this.allMovies.filter((movie: MovieMetadata) => movie.year.slice(0, 3) === '200');
            
            this.moviesMetadataBS.next(twoThousandsFilms);
        } else if (movieFilter === MovieFilters.twoThousandTens) {
            const twoThousandsFilms = this.allMovies.filter((movie: MovieMetadata) => movie.year.slice(0, 3) === '201');
            
            this.moviesMetadataBS.next(twoThousandsFilms);
        }
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