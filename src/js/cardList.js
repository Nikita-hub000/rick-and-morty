
import {list ,api, bar, field} from '../index'

export class cardList{
    constructor(container, newcards, result, notFound, button){
        this.container = container
        this.button = button
        this.newcard = newcards
        this.result = result
        this.notFound = notFound
    }
    render(data){
        this.data = data
        for (const element of this.data){
         const obj = {
             image: element.image,
             name: element.name, 
             id: element.id,
             status: element.status, 
             species: element.species, 
             gender: element.gender,
             origin: element.origin.name,
             location: element.location.name,
             episode: element.episode
            }
         const card = this.newcard(obj,list)
         const cardElem = card.create()
         this.container.appendChild(cardElem)
        }
    }
}