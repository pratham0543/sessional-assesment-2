//https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09




// Fetching api 
const xhr=new XMLHttpRequest();
const url=`https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`;

xhr.open('GET',url);



xhr.onreadystatechange=()=>
{
    var output=``;

    // Function for load more button
const loadButton=(id)=>{
    const albumName=`#album${id}` +` .full-img`;
    const btnClass=`.load-more-btn-${id}`;
    for(let i=5;i<50;i++){
        document.querySelectorAll(albumName)[i].classList.add('hide');
       }
   
       document.querySelector(btnClass).addEventListener('click',()=>{
        for(let i=5;i<50;i++){
            document.querySelectorAll(albumName)[i].classList.toggle('reveal');
           } 
         const btn=document.querySelector(btnClass)
         if(btn.innerHTML==='Load More')
            btn.innerHTML='Load Less';
         else{
            btn.innerHTML='Load More';
         }

        
    })
}



//Function for displaying content;
const selectOutputDiv=(id,output)=>{
    const className=`.alb-${id}`
    document.querySelector(className).innerHTML=output;
   
}


// Function to create pictures
const createPictures=(url,title,id)=>{
    output+=`
    <div class="full-img rounded mb-2">
        <img src=${url} class="img-thumbnail"/>
        <div class="img-content">
            <p>Title</p>
            <p>${title}</p>
        </div>
     </div>
    `;
   selectOutputDiv(id,output);
}


// continuing ajax

    if(xhr.readyState===4 && xhr.status===200){
        const response=JSON.parse(xhr.responseText);
        //console.log(response);
        

        // Album 1
        for(let i=0;i<50;i++){
                createPictures(response[i].url,response[i].title,1);
        }
        
         loadButton(1);


         output=` `;
       
        // Album 2
        for(let i=50;i<100;i++){
            createPictures(response[i].url,response[i].title,2);
        }

       loadButton(2);


        output=` `;
    //    
        // Album 3
        for(let i=100;i<150;i++){
            createPictures(response[i].url,response[i].title,3);
        }
       
     loadButton(3);
        // Album 4
        output=` `;
        for(let i=150;i<200;i++){
            createPictures(response[i].url,response[i].title,4);
        }
       
     loadButton(4);

        // Album 5
        output=` `;
        for(let i=200;i<250;i++){
            createPictures(response[i].url,response[i].title,5);
        }
     loadButton(5);
 
     // Album 6
     output=` `;
     for(let i=250;i<300;i++){
         createPictures(response[i].url,response[i].title,6);
     }
     loadButton(6);
        
     
     // Album 7
    output=` `;
     for(let i=300;i<350;i++){
         createPictures(response[i].url,response[i].title,7);
     }
     loadButton(7);
        // Album 8
        output=` `;
     for(let i=350;i<400;i++){
         createPictures(response[i].url,response[i].title,8);
     }
     loadButton(8);
        // Album 9
        output=` `;
     for(let i=400;i<450;i++){
         createPictures(response[i].url,response[i].title,9);
     }
     loadButton(9);
      
     
     // Album 10
        output=` `;
     for(let i=450;i<500;i++){
         createPictures(response[i].url,response[i].title,10);
     }
     loadButton(10);
        
        }
        //End of ajax code
        

}

xhr.send();

document.querySelector('#search-btn').addEventListener('click',()=>{
    
})