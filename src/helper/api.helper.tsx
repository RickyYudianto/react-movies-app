import axios from 'axios';

import { EndpointConstant } from '../constant/endpoint.constant';

export async function get(url: string, params: any = {}) {
  const qParam = Object.assign({}, params, {
    api_key: '844dba0bfd8f3a4f3799f6130ef9e335',
    language: 'en-US'
  });
  return await axios.get(EndpointConstant.BASE_URL + url, { params: qParam });
}
