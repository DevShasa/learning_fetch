// using async and await instead of chaining then()
// still needs error handling with try..catch
const url = 'https://jsonplaceholder.typicode.com/users';

export async function getData() {
  // putting async on a function means that 
  // if any actionn inside the function returns a promise 
  // it will await that promise

  //fetch().then().then().catch()

  // wait untill we get a response/ promise resolves


  try {
    let response = await fetch(url)
    if(!response.ok) throw new Error("Unable to fetch")
    console.log(response)
    const data = await response.json()
    console.log("DATA",data)
  } catch (error) {
    console.warn(error.message)
  }
}
