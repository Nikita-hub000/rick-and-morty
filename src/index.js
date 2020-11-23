import '../src/pages/style.css';
import {Api} from '../src/js/api';
import {Card} from './js/card';
import {cardList} from './js/cardList';

const list = document.querySelector('.main__grid')
const result = document.querySelector('.main__box')
const notFound = document.querySelector('.main__notFound')
let dlina = true
export const bar = document.querySelector('.head__field')
export const field = document.querySelector('.head__input')
export const api = new Api({
    baseUrl: 'https://rickandmortyapi.com/api/character/',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  api.getData()
.then(data => {
  CardList.render(data.results)
})

document.addEventListener('submit', function(){
  console.log(field.value.length)
  if(field.value.length === 0){
    result.style.display = "block";
  }
  notFound.style.display = "none";
  console.log("display" + dlina)
  if (dlina) {
    result.style.display = "none";
    notFound.style.display = "flex";
  } else {
     notFound.style.display = "none";
     result.style.display = "block";
   }
})


bar.addEventListener('submit', function(event){
  event.preventDefault()
  console.log(list.children.length)
  dlina = true
  console.log(Array.from(list.querySelectorAll('.card')))
   console.log(Array.from(list.querySelectorAll('.card')).map(function(el) { return el.attributes[1]}))
  for(let i = 0; i< list.children.length; i++){
        if(list.children[i].querySelector('.epi').value.includes((parseInt(field.value)))){
          dlina = false
          list.children[i].style.display = 'flex'
          console.log("ddd" + dlina)
        }
        else{
          list.children[i].style.display = 'none'
        }
      }
})

export const newcard = (data) => new Card(data)
const CardList = new cardList(list, newcard, result, notFound, bar)

