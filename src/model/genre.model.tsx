import { Exclude, Expose } from "class-transformer";

@Exclude()
export default class Genre {
  @Expose() id: number = 0;
  @Expose() name: string = '';
}