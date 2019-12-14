import { EndpointConstant } from '../constant/endpoint.constant';
import * as apiHelper from '../helper/api.helper';

export async function getDiscoverMovies(params: any = {}) {
  return await apiHelper.get(EndpointConstant.DISCOVER + EndpointConstant.MOVIE, params);
}

export async function getNowPlayingMovies(params: any = {}) {
  return await apiHelper.get(EndpointConstant.MOVIE + EndpointConstant.NOW_PLAYING, params);
}

export async function getMovieDetail(id: number) {
  return await apiHelper.get(EndpointConstant.MOVIE + id);
}