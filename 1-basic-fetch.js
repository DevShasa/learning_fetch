//the simplest fetch you can use and still have error handling
const url = 'https://jsonplaceholder.typicode.com/users';

export function getData() {

  fetch(url)
    .then((res)=>{
      // will take what is in the (resolved)promise returned by fetch
      console.log(res)
      if(!res.ok) throw new Error("Unable to fetch")

      //extract json string and convert it to javascript object
      return res.json()
    })
    .then((data)=>{
      // then the promise from the previous then has resolved, this then
      // ... will be called, then will alwaus wait for resolve
      console.log(data)
    })
    .catch(err=>{
      // for when something in the promise chain goes wrong
      console.warn(err.message)
    })
}

