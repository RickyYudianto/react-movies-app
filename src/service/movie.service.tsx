import { EndpointConstant } from '../constant/endpoint.constant';
import * as apiHelper from '../helper/api.helper';

export async function getDiscoverMovies() {
  return await apiHelper.get(EndpointConstant.DISCOVER + EndpointConstant.MOVIE);
}