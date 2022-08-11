//https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09




// Fetching api 
const albums=["technology",'software engineering','music','sports','science','hills','gardens','furniture','timeless classics','cosmetics'];
const xhr=new XMLHttpRequest();
const url=`https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`;

xhr.open('GET',url);
var response;


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

// function to setBlogCategory
const setBlogCategories=()=>{
    const categories=document.querySelectorAll('.blog-categories');
    for(let i=0;i<6;i++){
        const blogId=Math.floor(Math.random()*albums.length);
        categories[i].innerHTML=albums[blogId].charAt(0).toUpperCase() + albums[blogId].slice(1);
    }
}





// continuing ajax

    if(xhr.readyState===4 && xhr.status===200){
         response=JSON.parse(xhr.responseText);
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






    // addings blogs to webpage

    var blog=``;

            for(let i=0;i<6;i++)
            {
                blog+=`
                <div class="card mb-3">
                <img src=${response[i].thumbnailUrl} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title fw-bold text-uppercase">${response[i].title}</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia sed ex similique neque cumque reprehenderit eum ipsa nihil
                   quos quae modi unde blanditiis voluptates, consequatur explicabo quas a temporibus.</p>
                  <p class="card-text"><small class="text-muted">Author:John Doe | Category:<span class='blog-categories'>Technologies</span> </small></p>
                </div>
              </div>

                
                
                `;
            }

            document.querySelector('.blogs-container').innerHTML=blog;
           setBlogCategories();
           
             












        
        }
        //End of ajax code
        

}

xhr.send();


// Array of albums

var categories;

// navigate to particular album on search
document.querySelector('#search-btn').addEventListener('click',(e)=>{
    e.preventDefault();
    const searchValue=document.querySelector(".search-val").value;
    const loc=window.location.origin;
    const alb_id=albums.indexOf(searchValue.toLowerCase());
    const new_loc=loc+`\#album${alb_id+1}`;
    window.location.href=new_loc;
    
})

// setting blogs categories



var stringToHTML = function (str) {
	var dom = document.createElement('div');
    dom.setAttribute("class","card mb-3");
    
	dom.innerHTML = str;
	return dom;
};
 
const createAddBlogCard=(cardTitle,authorName,category,content)=>{

    const id=Math.floor(Math.random()*500);
    const blog=`
<img src="${response[id].thumbnailUrl}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${cardTitle}</h5>
  <p class="card-text">${content}</p>
  <p class="card-text"><small class="text-muted">Author:${authorName} | Category:<span class='blog-categories'>${category}</span></small></p>
</div>
`;
const blogId=stringToHTML(blog);

document.querySelector('.blogs-container').appendChild(blogId);

}



 

// const blogId=stringToHTML(blog);
// console.log(blogId);

// setTimeout(()=>document.querySelector('.blogs-container').appendChild(blogId),2000);



// creating and adding blog to blogs section of webpage
document.querySelector('#post').addEventListener('click',(e)=>{
    e.preventDefault();
    const name=document.querySelector('#username');
    const user_category=document.querySelector('#category');
    const text_value=document.querySelector('#text-content');
    const title_value=document.querySelector('#title');
    if(name.value.trim()!==""  && user_category.value.trim()!=="" && text_value.value.trim()!=="" && title_value.value.trim()!==""){
        const userName=name.value;
        const category=user_category.value;
        const textVal=text_value.value;
        const title=title_value.value;
        createAddBlogCard(title,userName,category,textVal);




    }
    else{
        alert("Please enter valid input");
    }
    name.value="";
    user_category.value="";
    text_value.value="";
    title_value.value="";



})