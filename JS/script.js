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
        // Album 5
        // Album 6
        // Album 7
        // Album 8
        // Album 9
        // Album 10
        
        }
        //End of ajax code


















        //  This applies to all albums on images expect first 5;
        

}

xhr.send();


// Scripting for load more
