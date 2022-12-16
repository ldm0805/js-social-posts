//Milestone 1
const posts = [
    {
        id: 1,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=171",
        author: {
            name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        created: "2021-06-25"
    },
    {
        id: 2,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=112",
        author: {
            name: "Sofia Perlari",
            image: "https://unsplash.it/300/300?image=10"
        },
        likes: 120,
        created: "2021-09-03"
    },
    {
        id: 3,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=234",
        author: {
            name: "Chiara Passaro",
            image: "https://unsplash.it/300/300?image=20"
        },
        likes: 78,
        created: "2021-05-15"
    },
    {
        id: 4,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=24",
        author: {
            name: "Luca Formicola",
            image: null
        },
        likes: 56,
        created: "2021-04-03"
    },
    {
        id: 5,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=534",
        author: {
            name: "Alessandro Sainato",
            image: "https://unsplash.it/300/300?image=29"
        },
        likes: 95,
        created: "2021-03-05"
    }
];

let itemsContent = '';
let profile_pic
//Milestone 2 
posts.forEach((element) => {
    //Bonus 1 : Data 
    const date = element.created;
    const [year, month, day] = date.split('-');
    const result = [month, day, year].join('/');
    //Bonus 2 : Lettere nell'immagine di profilo
    if(element.author.image == null){
        let text = element.author.name;
        const arrayName_contr = text.split(" ");
        let name_contr = arrayName_contr[0];
        let surname_contr = arrayName_contr[1];
        let letterNameContr = name_contr.charAt(0);
        let letterSurnameCheck = surname_contr.charAt(0);
        profile_pic = `<h2 class ="profile-pic">${letterNameContr}${letterSurnameCheck}</h2>`
    }
    else{
        profile_pic = `<img class="profile-pic" src="${element.author.image}" alt= "Phil Mangione">`
    }
    
    itemsContent += `<div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
            ${profile_pic}
            </div>
            <div class="post-meta__data">
                       
                <div class="post-meta__author">${element.author.name}</div>
                <div class="post-meta__time">${result}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${element.content}</div>
    <div class="post__image">
        <img src=${element.media} alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="${element.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone
            </div>
        </div> 
    </div>            
</div>`
let numeroLikes = element.likes
console.log(numeroLikes)
return numeroLikes
});


const cardPreview = document.getElementById('container')
cardPreview.innerHTML += itemsContent;

const iLikes = document.getElementsByClassName('js-like-button')

//Milestone 3 Bonus 3 Tasto like

//Array dei like
const arrayLike=[];
for (let i = 0; i < iLikes.length; i++){
    iLikes[i].addEventListener('click',function(){
        iLikes[i].classList.add("like-button--liked")
        const postId = this.dataset.postid
        const likes = document.getElementById(`like-counter-${postId}`)
        const likesNumber = parseInt(likes.innerText)
        //Controllo dei like inseriti 
        if(arrayLike.includes(postId)){

            likes.innerText = likesNumber-1;
            const index = arrayLike.indexOf(postId);
            arrayLike.splice(index,1);
            iLikes[i].classList.remove("like-button--liked");}

            else{
                likes.innerText = likesNumber+1;
                arrayLike.push(postId);
                iLikes[i].classList.add("like-button--liked");
            }
        })

}
