import {request, requestNews} from "./request";

export function getHomeMultidata() {
  return request({
    url:"/home/multidata"
  })
}

export function getNews() {
  return requestNews({
    params : {
      p:2,
      n:20,
      type:''
    }
  })
}
