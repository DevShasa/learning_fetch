// Create Webpage content from fetch results

const jsonstr = "https://random-data-api.com/api/v2/users?size=10";
const imgstr = "https://picsum.photos/id/237/300/200";
const textstr = "http://127.0.0.1:3000/";

export function getData() {
	let list = document.getElementById("list"); //the <ul>
	let img = document.getElementById("pic"); //the <img>
	let header = document.querySelector("header");

	fetch(imgstr)
		.then((res) => {
			if (!res.ok) throw new Error("Unable to fetch");
			return res.blob();
		})
		.then((blob) => {
			let urlToMemoryChunk = URL.createObjectURL(blob);
			console.log("URL TO IMAGE::", urlToMemoryChunk);
			// let img = document.getElementById('pic')
			img.src = urlToMemoryChunk;
		});

	fetch(textstr)
		.then((res) => {
			if (!res.ok) throw new Error("UNable to fetch text content");
			return res.text();
		})
		.then((txt) => {
      // add a h2 element to header
			header.innerHTML += `<h2>${txt}</h2>`; 
		});

	fetch(jsonstr)
		.then((res) => {
			if (!res.ok) throw new Error("UNable to fetch json content");
			return res.json();
		})
		.then((json) => {
			list.innerHTML = json.map(item=>{
        return `<li data-uid="${item.uid}">
        <p>${item.first_name} ${item.last_name}</p>
      </li>`
      }).join("") // make it one big string
		});
}
