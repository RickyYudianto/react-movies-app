import axios from 'axios';

import { EndpointConstant } from '../constant/endpoint.constant';

export async function get(url: string, params: any = {}, isBaseUrlV3: boolean = true) {
  const qParam = Object.assign({}, params, {
    api_key: '844dba0bfd8f3a4f3799f6130ef9e335',
    language: 'en-US'
  });

  const baseUrl = isBaseUrlV3 ? EndpointConstant.BASE_URL_V3 : EndpointConstant.BASE_URL;
  return await axios.get(baseUrl + url, { params: qParam });
}

export async function post(url: string, body: any = {}, isBaseUrlV3: boolean = true) {
  const baseUrl = isBaseUrlV3 ? EndpointConstant.BASE_URL_V3 : EndpointConstant.BASE_URL;

  return await axios.post(baseUrl + url, body);
}
