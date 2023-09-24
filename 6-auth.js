// API Keys, Authorization, Credentials, Content-Security-Policy

export function getData() {
  //What is an API Key
  //Where can we pass it to the server - querystring, headers, cookies
  //controlling when cookies and credentials are passed to a server
  //CSP meta tags and headers

  let str = "http://127.0.0.1:3000/";
  let url = new URL(str);
  let sp = url.searchParams
  sp.append('hello', 'world')
  sp.append('api-key', "asdf8asdfta876asdf")

  let h = new Headers()
  h.append("content-type", "application/json")
  h.append("x-api-key", "asda7asdf6asdf67a6sdf9") // custom header
  h.append("Authorization", 'Bearer asd9afsd86afsdf765HfTY') //JET
  // some header names are forbidden, read mdn docs to find them
  let request = new Request(url, {
    method:"POST",
    headers: h,

  })

  fetch(request)
    .then(res=>{
      if(!res.ok) throw new Error("UNable to fetch")
      return  res.text()
    })
    .then(rawtxt=>{
      console.log("CONTENT FROM SERVER::", rawtxt)
    })
    .catch(console.warn)

}
