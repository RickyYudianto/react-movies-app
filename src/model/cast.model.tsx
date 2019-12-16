import { Exclude, Expose } from "class-transformer";

@Exclude()
export default class Cast {
  @Expose() id: number = 0;
  @Expose() cast_id: number = 0;
  @Expose() character: string = '';
  @Expose() name: string = '';
  @Expose() order: number = 0;
  @Expose() profile_path: string = '';
}