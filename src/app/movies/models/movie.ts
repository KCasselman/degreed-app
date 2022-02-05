export interface MovieSearchResult {
    Search: Movie[];
    totalResults: number;
    Response: boolean;
}

export interface Movie {
    Title: string;
    Year: number;
    imdbID: number;
    Type: string;
    Poster: string;
}