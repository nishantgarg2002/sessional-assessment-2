function botm() {
	window.scrollTo(0,document.body.scrollHeight ||
	document.documentElement.scrollHeight);
}

const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
xhr.onload= function(){
    const response = JSON.parse(xhr.responseText);

    let template ="";
    for(let i=0; i<response.length; i= i+50){
        let id = response[i].thumbnailUrl;
        let albumnum = response[i].albumId;
        template += `
        <div>
            <img src="${id}" style="margin-right: 50px;">
            <div>
            <p style="position:auto">Album ${albumnum}</p>
            </div>
        </div>`
    }
    document.querySelector("#my-container").innerHTML = template    
}
xhr.send()