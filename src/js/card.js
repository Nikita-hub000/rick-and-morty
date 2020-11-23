export class Card{
    constructor(data){
        this.data = data
    }
    create(){
        const card = document.createElement('div')
        const cardImg = document.createElement('img')
        const cardData = document.createElement('div')
        const cardId = document.createElement('p')
        const cardContainer = document.createElement('div')
        const cardName = document.createElement('h1')
        const cardStatus = document.createElement('p')
        const cardCategory = document.createElement('p')
        const cardGender = document.createElement('p')
        const cardBegin = document.createElement('p')
        const cardLocation = document.createElement('p')
        let mas = []
        let cardEpisode = parseInt(this.data.episode.forEach(element => {
            mas.push(parseInt(element.match(/\d+/))) 
        }))
        console.log(this.data.name)
        console.log(mas)
        const epi = document.createElement('p')
        epi.classList.add('epi')
        epi.style.display = 'none'
        epi.value= mas
        card.classList.add('card')
        cardImg.classList.add('card__img')
        cardData.classList.add('card__data')
        cardId.classList.add('card__id')
        cardContainer.classList.add('card__container')
        cardName.classList.add('head__heading')
        cardStatus.classList.add('card__status')
        cardCategory.classList.add('head__text')
        cardGender.classList.add('head__text')
        cardBegin.classList.add('head__text')
        cardLocation.classList.add('head__text')
        cardImg.src = this.data.image
        cardId.textContent = '#' + this.data.name.toLowerCase().replace(/\s+/g, '') + "ID"+ this.data.id
        cardName.textContent = this.data.name
        cardStatus.textContent = this.data.status
        if (this.data.status === 'Alive'){
            cardStatus.style.color = 'green'
        }
        else if(this.data.status === 'Dead'){
            cardStatus.style.color = 'red'
        }
        else{
            cardStatus.style.color = 'white'
        }
        cardCategory.textContent ="Категория: " + this.data.species
        cardGender.textContent ="Пол: "+ this.data.gender
        cardBegin.textContent ="Начало: " +this.data.origin
        cardLocation.textContent ="Местоположение: " + this.data.location
        card.appendChild(cardImg)
        card.appendChild(cardData)
        cardData.appendChild(cardId)
        cardData.appendChild(cardContainer)
        cardContainer.appendChild(cardName)
        cardContainer.appendChild(cardStatus)
        cardData.appendChild(cardCategory)
        cardData.appendChild(cardGender)
        cardData.appendChild(cardBegin)
        cardData.appendChild(cardLocation)
        cardData.appendChild(epi)
        return card;
    }
}
