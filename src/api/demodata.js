import { fetch } from 'utils/fetch';

export function getData() {
  return fetch({
    url: '/demo/list',
    method: 'get',
  });
}
