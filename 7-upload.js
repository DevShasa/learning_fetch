//how to upload one or more files from the browser to a server
//FormData objects
//HTTP Methods POST, PATCH, PUT

let endpoint = 'http://127.0.0.1:3000/';

export function setData() {
  const imgInput = document.getElementById('imgfile')
  const jsonInput = document.getElementById('jsonfile')


  document.getElementById("myform").addEventListener("submit", (ev)=>{
    ev.preventDefault() // prevent the form from calling the action

    // upload something
    let obj = {
      id: 23423,
      name:"Shasa"
    }

    let formData = new FormData();
    console.log("IMAGE INPUT VALUE::",imgInput.files[0])

    formData.append("shasaImg", imgInput.files[0], imgInput.files[0].name)
    // you can send multiple files by simply adding another formData.append

    const request = new Request(endpoint, {
      method:"POST",
      //body: JSON.stringify(obj),
      body: formData,
      // headers:{
      //   'content-type': 'multipart/form-data',
      // }
    });

    // make a call to the simple server in /server,  
    fetch(request)
      .then(res=>{
        if(!res.ok) throw new Error("Unable to fetch")
        return res.text() // server response is text
      })
      .then(txt=>{
        console.log(txt)
      })
      .catch(console.warn)
  })
}


// request body can me string(json)it can also be formdataObj for files or an iterable object