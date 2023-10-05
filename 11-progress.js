// measure the download progress of a file

const imgstr = 'https://picsum.photos/id/237/3000/2000'; //big image

export function getData() {
  // Get progress of a downloading file
  fetch(imgstr)
    .then(async (response)=>{
      // read the stream of incoming data from the response body
      const reader = response.body.getReader();

      const contentLength = +response.headers.get("content-length");

      let receivedLength = 0
      let dataChunksToBeReasembledLater = []

      // console.group("Progress") // create an indentedted console with "Console as title"
      
      while(true){
        const { done, value } = await reader.read()
        if(done) break

        dataChunksToBeReasembledLater.push(value)
        receivedLength += value.length
        console.log(`${receivedLength} out of ${contentLength}`)
      }

      // console.groupEnd("Progress")

      // Now that we have the data chunks let us reasemble them back
      const byteArray =  new  Uint8Array(receivedLength)
      let position = 0
      for(let chunk of dataChunksToBeReasembledLater){
        byteArray.set(chunk, position)
        position += chunk.length;
      }

    //if it were a text file we could use
    //let txt = new TextDecoder('utf-8').decode(byteArray);
    //and then JSON.parse if it was a JSON string

      // Now that we have the bytes reasemmbled 
      let imgBlob = new Blob([byteArray], {type: "image/jpg"}); // if fetching normaly we would just res.blob()
      let url = URL.createObjectURL(imgBlob)
      let img = document.getElementById('pic')
      img.src = url;

    })
    .catch(error => console.warn(error))
}
