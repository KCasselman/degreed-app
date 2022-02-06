export class MovieMetadata {
    title: string; 
    year: number;
    rated: string;
    released: Date;
    runtime: string;
    plot: string;
    poster: string;
    imdbId: string;

    constructor(movieMetdataDto: MovieMetdataDto) {
        this.title = movieMetdataDto.Title;
        this.year = parseInt(movieMetdataDto.Year);
        this.rated = movieMetdataDto.Rated;
        this.released = new Date(Date.parse(movieMetdataDto.Released));
        this.runtime = movieMetdataDto.Runtime;
        this.plot = movieMetdataDto.Plot;
        this.poster = movieMetdataDto.Poster;
        this.imdbId = movieMetdataDto.imdbID;
    }
}

// KC - should any array type be changed?
export interface MovieMetdataDto {
    Title: string; 
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    // KC - make RatingDTO  { Source = string | Value = string }
    Ratings: Object[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}