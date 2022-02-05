import { Injectable } from '@angular/core';
import { MoviesService } from './movies.service';

@Injectable()
export class MoviesSubjectService {
    constructor(private moviesService: MoviesService) { }
    
}