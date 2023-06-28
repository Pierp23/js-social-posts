const posts = [
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

for (i = 0; i < posts.length; i++){
    container.innerHTML = container.innerHTML +
    `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${posts[i].author.photo}" alt="${posts[i].author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${posts[i].author.name}</div>
                        <div class="post-meta__time">${posts[i].date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${posts[i].text}</div>
            <div class="post__image">
                <img src="${posts[i].media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `
}

