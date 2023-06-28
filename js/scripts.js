const post = [
    {
        id : 1,
        author : {
            name : 'Pierpaolo',
            photo : 'https://unsplash.it/300/300?image=1'
        },
        date : '06/28/2023',
        media : 'https://unsplash.it/300/300?image=11',
        likes : 100,
        text : 'Lorem ipsum lorem ipsum' 
    },

    {
        id : 2,
        author : {
            name : 'Pier',
            photo : 'https://unsplash.it/300/300?image=2'
        },
        date : '07/28/2023',
        media : 'https://unsplash.it/300/300?image=22',
        likes : 121,
        text : 'Lorem ipsum lorem ipsum'
    },

    {
        id : 3,
        author : {
            name : 'Paolo',
            photo : 'https://unsplash.it/300/300?image=3'
        },
        date : '05/28/2023',
        media : 'https://unsplash.it/300/300?image=33',
        likes : 99,
        text : 'Lorem ipsum lorem ipsum' 
    }
]


const container = document.getElementById('container');

for (i = 0; i < post.length; i++){
    container.innerHTML = container.innerHTML +
    `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${post[i].author.photo}" alt="${post[i].author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${post[i].author.name}</div>
                        <div class="post-meta__time">${post[i].date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${post[i].text}</div>
            <div class="post__image">
                <img src="${post[i].media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a id='${post[i].id}' class="like-button  js-like-button" href="#" data-postid="${post[i].id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${post[i].id}" class="js-likes-counter">${post[i].likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `
}


let btn1 = document.getElementById('1');
let btn2 = document.getElementById('2');
let btn3 = document.getElementById('3');

let likeCounter1 = document.getElementById('like-counter-1');
let likeCounter2 = document.getElementById('like-counter-2');
let likeCounter3 = document.getElementById('like-counter-3');


btn1.addEventListener('click',
    function(){
        let likesClicked = post[0].likes;
        console.log('PRIMA', likesClicked)
        console.log('bottone cliccato');
        likesClicked++;
        console.log('DOPO', likesClicked);
        btn1.classList.add('like-button--liked');
        likeCounter1.innerHTML = likesClicked;
        }
)

btn2.addEventListener('click',
    function(){
        let likesClicked = post[1].likes;
        console.log('PRIMA', likesClicked)
        console.log('bottone cliccato');
        likesClicked++;
        console.log('DOPO', likesClicked);
        btn2.classList.add('like-button--liked');
        likeCounter2.innerHTML = likesClicked;
        }
)

btn3.addEventListener('click',
    function(){
        let likesClicked = post[2].likes;
        console.log('PRIMA', likesClicked)
        console.log('bottone cliccato');
        likesClicked++;
        console.log('DOPO', likesClicked);
        btn3.classList.add('like-button--liked');
        likeCounter3.innerHTML = likesClicked;
        }
)
