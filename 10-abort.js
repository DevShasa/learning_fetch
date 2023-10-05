// How to abort a fetch call

const url = 'https://picsum.photos/id/237/3000/2000';

const controller = new AbortController()
const signal = controller.signal; // this is what is passed into the fetch

const request =  new Request(url, {
  signal: signal
})

export async function getData() {

  // listen to the clicking of abort button
  const abortButton  = document.getElementById("abort")
  abortButton.addEventListener("click", (event)=>{
      // stop the fetch call
      controller.abort() // this will abort and then trigger an error 
      console.log("Waah nimeabort buana")
  })

  try {
    const response = await fetch(request)
    if(!response.ok) throw new Error

    const image = await response.blob()
    console.log("IMAGE IS::",image)
  } catch (error) {
    console.warn(error)
  }
}
