// KC - I think I will keep all of these because you can search for movies by based on properties other than the imdbID
// KC - should the id be a number?
export class Movie {
    title: string;
    year: string;
    imdbId: string;
    type: string;
    poster: string;

    // KC - should I pass in MovieSearchResultDto or MovieDto here?
    // KC - should this be set to a type or any?
    constructor(movieDto: any = {}) {
        this.title = movieDto.Title;
        this.year = movieDto.Year;
        // this.year = parseInt(movieDto.Year);
        this.imdbId = movieDto.imdbID;
        this.type = movieDto.Type;
        this.poster = movieDto.Poster;
    }
}


// KC - should Search property be set to MovieDto or just Movie
// KC - should these other properties really be strings
export interface MovieSearchResultDto {
    Search: MovieDto[];
    totalResults: string;
    Response: string;
}

// KC - should this be called MovieDto or just Movie?
// KC - should these really all be type string
export interface MovieDto {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}