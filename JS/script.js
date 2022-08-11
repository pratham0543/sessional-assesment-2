//https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09

// Fetching api 
const xhr=new XMLHttpRequest();
const url=`https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`;

xhr.open('GET',url);

xhr.onreadystatechange=()=>
{
    if(xhr.readyState===4 && xhr.status===200){
        const response=JSON.parse(xhr.responseText);
        //console.log(response);
        var output=``;

        for(let i=0;i<5;i++){
        output+=`
         <div class="full-img rounded mb-2">
         
            <img src=${response[i].url} class="img-thumbnail"/>
            <div class="img-content">
                <p>Title</p>
                <p>${response[i].title}</p>
            </div>
         </div>
        
        `;
        }
        document.querySelector('.img-container').innerHTML=output;
    }
}

xhr.send();
