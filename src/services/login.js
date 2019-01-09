import request from '../utils/request';
import qs from 'qs';

export function login(params) {
  return request('/auth/login/web/mobile', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
