import { Exclude, Expose } from "class-transformer";

@Exclude()
export default class Crew {
  @Expose() id: number = 0;
  @Expose() credit_id: number = 0;
  @Expose() department: string = '';
  @Expose() job: string = '';
  @Expose() name: string = '';
  @Expose() profile_path: string = '';
}