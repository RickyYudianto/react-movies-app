import { Exclude, Expose } from 'class-transformer';

import Cast from './cast.model';
import Crew from './crew.model';
import Genre from './genre.model';

@Exclude()
export default class Movie {
  @Expose() id: number = 0;
  @Expose() popularity: number = 0;
  @Expose() vote_count: number = 0;
  @Expose() poster_path: string = '';
  @Expose() backdrop_path: string = '';
  @Expose() original_title: string = '';
  @Expose() genres: Array<Genre> = [];
  @Expose() casts: Array<Cast> = [];
  @Expose() crews: Array<Crew> = [];
  @Expose() title: string = '';
  @Expose() vote_average: number = 0;
  @Expose() overview: string = '';
  @Expose() release_date: Date = new Date();
}