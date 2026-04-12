function renderData(final) {
    // console.log(final);
    let div = document.createElement("div");
    final.map((item, index) => {
        console.log(item);
        div.innerHTML += `
        <div>
            <p>${item.userId}</p>
            <p>${item.title}</p>
            <p>${item.body}</p>
        </div>
        `
        
    });
     let body = document.getElementsByTagName("body");
     body[0].appendChild(div)
}

async function getData(renderedData) {
    let loader = document.getElementById("loader");
    loader.style.display = "flex"
  try {
    let result = await fetch("https:/dww/jsonplaceholder.typicode.com/posts");
    console.log(result);
    let final = await result.json();
    console.log(final);
    loader.style.display = "none"
    renderedData(final);
  } catch(err) {
     let body = document.getElementsByTagName("body");
    
    loader.style.display = "none"
    let p = document.createElement("p")
    
    p.innerText = "Getting error while fetching data"
    body[0].appendChild(p)



    console.log(err,"Getting error while fetching data")
  }
}

getData(renderData);
