// Response objects

const jsonstr = 'http://127.0.0.1:5500/local-sample.json'; // json file
const imgstr = 'https://picsum.photos/id/237/300/200'; // image file
const fontstr = 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Hw5aXp-p7K4KLg.woff2'; // font file
const htmlstr = 'http://127.0.0.1:5500/'; //html file

// HTTP Request  - HEAD, BODY
// HTTP Response - HEAD, BODY

let obj = {
  id: crypto.randomUUID(),
  name: 'the one who knocks',
  favouriteColor: 'blue',
};

export function getData() {
  const jsonstring = JSON.stringify(obj) // convert object into a string
  /**
   * Construct a new file using jsonstring
   * Call the file mydata.json
   * provide the MIME type which is 'application/json'
   */
  let file = new File([jsonstring], 'mydata.json', {type:"application/json"});


  fetch(imgstr) 
    .then(res =>{
      if(!res.ok) throw new Error("Unable to fetch")
      return res.blob() // binary blobl for images, video, audio, fonts etc
      // res.text() // for text, html, xml files, js , cs etc
      // res.json() // for json files
    })  
    .then(blob=>{
      console.log("BLOB::",blob) // A blob is a chunk of memory

      // to use the blob create a url to the chunk of memory where it is stored
      let url = URL.createObjectURL(blob)
      let img = document.getElementById('pic')
      img.src = url
    })
    .catch(console.warn);


  // let us construct a response
  // let response = new Response(file, {
  //   status:200,
  //   statusText:"Mambo Iko shwari",
  //   headers:{
  //     'content-type':"application/json",
  //     'content-length':file.size,
  //     "x-shasa":"Look ma im a header", // custom headers must begin with x 
  //   }
  // })


  // console.log("RESPONSE:::", response)
  // console.log(response.headers.get('content-type'))
  // response.headers.forEach((value, name) =>{
  //   console.log(`${name} ===> ${value}`)
  // })
}
