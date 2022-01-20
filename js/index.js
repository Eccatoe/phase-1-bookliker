document.addEventListener("DOMContentLoaded", function() {});

fetchBooks()

const bookList=document.querySelector('#list')
const showPanel=document.querySelector('#show-panel')

function fetchBooks(){
    fetch('http://localhost:3000/books')
    .then(response=>response.json())
    .then(booksArray=>createBookList(booksArray))
}


function createBookList(booksArray){
    booksArray.forEach(book=>{
        const bookListItem=document.createElement('li')
        bookListItem.textContent=`${book.title}`
        bookListItem.addEventListener('click', ()=>{
            const bookCard=document.createElement('div')
            bookCard.className="bookCard"
            const bookImg=document.createElement('img')
            const bookDescription=document.createElement('p')



            const likeCounter=document.createElement('button')
            let i=0
            likeCounter.textContent=`${i} likes`
            
            const likeButton=document.createElement('button')
            likeButton.textContent="Like"
            likeButton.addEventListener('click', ()=>{
                i++
                likeCounter.textContent=`${i} likes`
                return (i)
            })
            const dislikeButton=document.createElement('button')
            dislikeButton.textContent="Disike"
            dislikeButton.addEventListener('click', ()=>{
                if(i>0){
                i--
                likeCounter.textContent=`${i} likes`
                return (i)
                }
            })


            const ul=document.createElement('ul')
            const username=book.users.forEach(user=>{
                const li=document.createElement('li')
                li.innerText=`${user.username}`
                ul.append(li)
            })
            bookDescription.textContent=`Description: ${book.description} \n
            Users who liked this selection:`
            bookImg.src=`${book.img_url}`
            bookCard.append(bookImg)
            bookCard.append(bookDescription)
            bookCard.append(ul)
            bookCard.append(likeCounter)
            bookCard.append(likeButton)
            bookCard.append(dislikeButton)
            showPanel.append(bookCard)
        })
        bookList.append(bookListItem)
    })
}




// const username=book.users.forEach(user=>{
//     return user.username
// })

// function adoptAnimal(animalObj){

//     fetch('http://localhost:3000/users',{
//         method: 'POST'
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify(animalObj)
//     })
//     .then(res=>res.json())
//     .then(animal=>console.log(animal))
// }

// form event listener
// submit handler
// e.preventDeafult
// render animal function
// pass "adoptanimal() to submit handler"