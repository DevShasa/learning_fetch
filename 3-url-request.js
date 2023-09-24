// URL and Request Objects
/*
 url: href, host, hostname, port, protocol, origin, pathname, hash, search, searchParams
request options: method, body, headers, cache
cache  (HTTP Cache, NOT Cache API)
- `default`: cache first, server request if stale, update cache if newer
- `reload`: always go to server AND update the cache
- `no-store`: always go to server but do not update the cache
- `no-cache`: make a conditional request to server and compare, update cache and use latest
- `force-cache`: only makes request if there is no HTTP Cache file
- `only-if-cache`: from cache or 504 gateway timeout error
Headers
- string | object literal | new Headers()
*/

const str = 'http://127.0.0.1:5500/local-sample.json?attempt=123&other=hello';

export function getData() {

  // Javascript has an unbuilt url constructor
  const url = new URL(str)
  console.log("HOST::",url.host)
  console.log("HOSTNAME::",url.hostname)
  console.log("PORT::",url.port)
  console.log("PATHNAME::",url.pathname)
  console.log("ORIGIN",url.origin)
  console.log("HREF::",url.href)
  console.log("SEARCHPARAMS::",url.searchParams)
  console.log("SEARCH ::",url.search)
  console.log("PROTOCOL::",url.protocol)
  console.log("HEADERS::",url.username)

  // Javascript also hs an inbuilt Request constructor too
  const request = new Request(url, {
    headers:{
      "x-shasa":"look maa Im a header",
    },
    method:"GET",
    cache: 'no-store'
  })

  fetch(url)
    .then(res=>{
      console.log(res)
      if(!res.ok) throw new Error("Uable to fetch")
      return res.json()
    })
    .then(res=>{
      console.log("DATA::",res)
    })
    .catch(err=>{
      console.warn(err.message)
    })
}
