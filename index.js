// Get API Endpoints
const science = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=c5a01f4b11cc41f5850a89a375d592b2"
const business = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c5a01f4b11cc41f5850a89a375d592b2'
const health = 'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=c5a01f4b11cc41f5850a89a375d592b2'
const entertainment = 'https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=c5a01f4b11cc41f5850a89a375d592b2'
const technology ='https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=c5a01f4b11cc41f5850a89a375d592b2'
const sports = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=c5a01f4b11cc41f5850a89a375d592b2'

let scienceBtn = document.querySelector('.btn-Science')
let section = document.querySelector('section')
let techBtn = document.querySelector('.btn-Technology')
let bisBtn = document.querySelector('.btn-Business')
let healthBtn = document.querySelector('.btn-Health')
let sportsBtn = document.querySelector('.btn-Sports')
let entBtn = document.querySelector('.btn-Entertainment')
let error = document.querySelector('.error')


// develop Science funtion
 function getscience(){
    fetch(science)
        .then(response => {
            return response.json()
        })
        .then(data => {
            let newsArr = data.articles
                newsArr.forEach(news => {
                    // Create Title
                let article = document.createElement('article')
                let title = document.createElement('p')
                    title.textContent = news.title

                    // Create Image
                    let image = document.createElement('img')
                    image.src = news.urlToImage
                    // if(image.src ===  response.st'){
                    //     console.log('none')
                    // }
                   
                    // Create description
                    let content = document.createElement('p')
                        content.textContent = news.description


                    // Create date
                    let date = document.createElement('span')
                        let noDate= news.publishedAt
                            noDate = new Date(noDate).getTime()
                        let day = new Date(noDate).getDate()
                        let month = new Date(noDate).getMonth()+1
                        let year = new Date(noDate).getFullYear()
                        let currentDate = `${day}/${month}/${year}`
                            date.textContent = currentDate


                    // Create ReadMore link
                    let button = document.createElement('button')
                    let link = document.createElement('a')
                        link.href = news.url
                        link.innerText = 'Read More'
                        link.target = '_blank'
                        button.textContent = 'Read More'
                        // button.appendChild(link)


                    // Append
                    article.appendChild(title)
                    article.appendChild(image)
                    article.appendChild(content)
                    article.appendChild(date)
                    article.appendChild(link)
                    section.appendChild(article)
            })
        }) 
    }

 scienceBtn.addEventListener('click',getscience)
