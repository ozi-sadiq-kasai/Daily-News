// get endpoints
const science = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=c5a01f4b11cc41f5850a89a375d592b2"
const business = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c5a01f4b11cc41f5850a89a375d592b2'
const health = 'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=c5a01f4b11cc41f5850a89a375d592b2'
const entertainment = 'https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=c5a01f4b11cc41f5850a89a375d592b2'
const technology ='https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=c5a01f4b11cc41f5850a89a375d592b2'
const sports = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=c5a01f4b11cc41f5850a89a375d592b2'

var newsArr = []

// select buttons
let techBtn = document.querySelector('.btn-Technology')
let bisBtn = document.querySelector('.btn-Business')
let healthBtn = document.querySelector('.btn-Health')
let sportsBtn = document.querySelector('.btn-Sports')
let scienceBtn = document.querySelector('.btn-Science')
let entBtn = document.querySelector('.btn-Entertainment')
let section = document.querySelector('section')
let error = document.querySelector('.error')

// add Event listeners


const getTech = async ()=>{
    const response = await fetch(technology)
    newsArr = []
if(response.status >= 200 && response.status < 300){
    const myJson = await response.json()
    newsArr = myJson
    newsArr = newsArr.articles
    console.log(newsArr)
    // console.log(newsArr[0].title)
}else{
    console.log(response.status,response.statusText)
}
displayNews()
}

function displayNews(){
    if (newsArr.length === 0) {
        section.innerHTML =`<p class= error>No data found</p>`
    }
    else{
        newsArr.forEach(news =>{
            let article = document.createElement('article')
            let image = document.createElement('img')
                image.setAttribute('width','200px')
                image.src = news.urlToImage

               article.appendChild(image)
               section.appendChild(article)
            
        })
    }
}



    techBtn.addEventListener('click',getTech)