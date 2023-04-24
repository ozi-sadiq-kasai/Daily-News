const science = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=c5a01f4b11cc41f5850a89a375d592b2"

let scienceBtn = document.querySelector('.btn-Science')
let section = document.querySelector('section')



 function getscience(){
    // let newsArr = []
    fetch(science)
        .then(response => {
            return response.json()
        })
        .then(data => {
            let newsArr = data.articles
            // console.log(newsArr)
            // newsArr = data
            // console.log(newsArr)
            // newsArr = data.articles
            // newsArr.forEach(news => {
            //     let article = document.createElement('article')
            //     let paragraph = document.createElement('p')
            //         paragraph.textContent = news.title
            //         // console.log(paragraph)
            //         article.appendChild(paragraph)
            //         section.appendChild(article)
            // })

                newsArr.forEach(news => {
                let article = document.createElement('article')
                let paragraph = document.createElement('p')
                    paragraph.textContent = news.title
                    // console.log(paragraph)
                    article.appendChild(paragraph)
                    section.appendChild(article)
            })
        
        
        })
     
    }

 scienceBtn.addEventListener('click',getscience)
