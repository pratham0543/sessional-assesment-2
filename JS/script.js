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

        for(let i=0;i<50;i++){
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
        const className=`.alb-${1}`
        document.querySelector(className).innerHTML=output;
        
        
        }
        //End of ajax code


















         // This applies to all albums on images expect first 5;
         for(let i=5;i<50;i++){
            document.querySelectorAll("#album1 .full-img")[i].classList.add('hide');
           }
        document.querySelector('.load-more-btn').addEventListener('click',()=>{
            for(let i=5;i<50;i++){
                document.querySelectorAll("#album1 .full-img")[i].classList.toggle('reveal');
               } 


        })

}

xhr.send();


// Scripting for load more
