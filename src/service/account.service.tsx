import { EndpointConstant } from '../constant/endpoint.constant';
import * as apiHelper from '../helper/api.helper';

export async function postRegistration(body: any = {}) {
  return await apiHelper.post(EndpointConstant.ACCOUNT + EndpointConstant.SIGN_UP, body, false);
}
