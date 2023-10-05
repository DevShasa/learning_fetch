//handle multiple requests for data
// in sequence .then().then().then()
// or at the same time - Promise.all() .race() .allSettled()

const jsonstr = 'https://random-data-api.com/api/v2/users?size=10';
const imgstr = 'https://picsum.photos/id/237/300/200';

export function getData() {
  
  //handling multiple requests IN SEQUENCE 
  let promiseThatResolveToImageBlob
  let promiseThatResolveToJson

  fetch(imgstr)
    .then((response)=>{
      if(!response.ok) throw new Error("could not fetch")
      promiseThatResolveToImageBlob = response.blob(); // assign the promise thhat resolves to an image to this variable
      return fetch(jsonstr) // yeet this fetch to the next promise chain
    })
    .then((response)=>{
      if(!response.ok) throw new Error("could not fetch")
      promiseThatResolveToJson  = response.json() // same as above
      return Promise.all([promiseThatResolveToImageBlob, promiseThatResolveToJson]) // assign the two promises into promise.all
    })
    .then(([imgblob, json])=>{
      // then promise.all resolves the results are put into an array
      console.log("PROMISEALL", imgblob, json)
    })
    .catch(console.warn)

}

export function getDataa(){
  // this is same as above but instead of returningn a new fetch...
  //... we returning the result of initial fetch to be used inn second fetch 
  fetch(imgstr)
    .then((response)=>{
      if(!response.ok) throw new Error("Unable to fetch")
      return response.blob() // pass the promise to th next in the chain
    })
    .then(blob=>{
      // we now have access to the resolved blob
      console.log("IMAGE BLOB:::",blob)
      // we can make a second fetch or summ with the data
    })
    
}

export function getDataaa(){
  // doing multiple calls but this time placing them directly inside promise.all
  
  const getImage = fetch(imgstr)
  const getData = fetch(jsonstr)

  Promise.all([getImage, getData])
    .then(([imageRes, dataRes]) =>{
      // create variables for the new promise
      const resolvetoImage = imageRes.blob()
      const resolvetoData = dataRes.json()
      return Promise.all([resolvetoImage, resolvetoData])
    })
    .then(([image, data])=>{
      console.log("Image and data::", image, data)
    })
    .catch(console.warn("One promise failed"))
}
