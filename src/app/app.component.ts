import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'movie-app';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    // let allMovieMetadata: any[] = [];
    //   this.httpClient.get<any>('http://www.omdbapi.com/?s=Batman&apiKey=98c1ccfd').subscribe(movies => {
    //     const first10Movies = movies.Search.slice(0, 10);
    //     first10Movies.map((movie: any) => {
    //       this.httpClient.get<any>(`http://www.omdbapi.com/?i=${movie.imdbID}&apiKey=98c1ccfd`).subscribe(movieMetadata => {
    //         allMovieMetadata.push(movieMetadata);
    //         // console.log('allMovieMetadata:', allMovieMetadata);
    //       });
    //     });
    //   });
  }
}
