const url =  '47.106.8.146:80/ddf'
export default {
  getParam (callid, param, pagemap) {
    if (!pagemap) pagemap = {}
    let map = {
      'cmd': callid,
      'code': '',
      'type': '1',
      'data': param,
      'pagemap': pagemap
    }
    return JSON.stringify(map)
  },
  postData (thisval, params, token) {
    return thisval.$http.post('http://' + url + '/openapi/service', params,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'cid': '600',
          'ver': '1.0'
        }
      })
      .then((res) => {
        return res.data
      })
      .catch((res) => {
        return res
      })
  }
}
