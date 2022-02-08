import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { apiKey } from "../../api-credentials";
import { MovieSearchResultDto, Movie, MovieDto } from "../models/movie";
import { MovieMetadata, MovieMetdataDto } from "../models/movie-metadata";

@Injectable()
export class MoviesService {
    private apiKey: string;

    constructor(private httpClient: HttpClient) {
        this.apiKey = apiKey;
    }
    

    getMoviesBySearch(searchParameter: string): Observable<Movie[]> {
        return this.httpClient
            .get<MovieSearchResultDto>(`http://www.omdbapi.com/?s=${searchParameter}&type=movie&apiKey=${this.apiKey}`).
            pipe(map((response: MovieSearchResultDto) => response.Search.map((movie: MovieDto)=> new Movie(movie))));
    }

    getMovieMetadataById(imdbID: string): Observable<MovieMetadata> {
        return this.httpClient
            .get<MovieMetdataDto>(`http://www.omdbapi.com/?i=${imdbID}&apiKey=${this.apiKey}`)
            .pipe(map((response: MovieMetdataDto) => new MovieMetadata(response)));
    }
}