import { Exclude, Expose } from 'class-transformer';

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
  @Expose() title: string = '';
  @Expose() vote_average: number = 0;
  @Expose() overview: string = '';
  @Expose() release_date: Date = new Date();
}