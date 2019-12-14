import { Exclude, Expose } from "class-transformer";

@Exclude()
export default class Movie {
  @Expose() id: number = 0;
  @Expose() popularity: number = 0;
  @Expose() vote_count: number = 0;
  @Expose() poster_path: string = '';
  @Expose() backdrop_path: string = '';
  @Expose() original_title: string = '';
  @Expose() genre_ids: Array<number> = [];
  @Expose() title: string = '';
  @Expose() overview: string = '';
  @Expose() release_date: Date = new Date();
}