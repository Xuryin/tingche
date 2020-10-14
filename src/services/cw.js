import fetch from "@/env/fetch"
import storage from "@/utils/storage"

const request = fetch.request

// 设置统一的头部变量
fetch.defaults.headers.common['env'] = storage.getItem('BLOCK_CHAIN_ENV') || 'dev';
// fetch.defaults.headers.common['token'] = 'd55fb2fd575d5971cb7aad385c44570f';


export function getData(params) {
  return request({
    url: '/indicator/10000000501',
    method: 'POST',
    data: {
      ...params,
    }
  })
}

export function getApi (params, apiCode) {
  return request({
    url: `/indicator/10000002${apiCode}`,
    method: 'POST',
    data: {
      ...params,
    }
  })
}
