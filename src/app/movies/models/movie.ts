export class Movie {
    title: string;
    year: string;
    imdbId: string;
    type: string;
    poster: string;

    constructor(movieDto: MovieDto) {
        this.title = movieDto.Title;
        this.year = movieDto.Year;
        this.imdbId = movieDto.imdbID;
        this.type = movieDto.Type;
        this.poster = movieDto.Poster;
    }
}

export interface MovieSearchResultDto {
    Search: MovieDto[];
    totalResults: string;
    Response: string;
}

export interface MovieDto {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}