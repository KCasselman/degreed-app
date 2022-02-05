import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { apiKey } from "../../api-credentials";
import { MovieSearchResult } from "../models/movie";
import { MovieMetadata } from "../models/movie-metadata";
// import { ApiCredentials } from '../../app/api-credentials';

@Injectable()
export class MoviesService {
    private apiKey: string;

    constructor(private httpClient: HttpClient) {
        this.apiKey = apiKey;
    }
    

    getMoviesBySearch(searchParameter: string): Observable<MovieSearchResult> {
        // KC - do some logic in case searchParameter contains a space (underscore represents space)
        return this.httpClient.get<any>(`http://www.omdbapi.com/?s=${searchParameter}&apiKey=${this.apiKey}`);
    }

    getMovieMetadataById(imdbID: number): Observable<MovieMetadata> {
        return this.httpClient.get<any>(`http://www.omdbapi.com/?i=${imdbID}&apiKey=${this.apiKey}`);
        // const first10Movies = movies.Search.slice(0, 10);
        // let allMovieMetadata: any[] = [];
        // first10Movies.map((movie: any) => {
        //   this.httpClient.get<any>(`http://www.omdbapi.com/?i=${movie.imdbID}&apiKey=98c1ccfd`).subscribe(movieMetadata => {
        //     allMovieMetadata.push(movieMetadata);
        //   });
        // });
    }
}