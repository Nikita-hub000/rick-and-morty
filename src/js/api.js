export class Api{
    constructor({baseUrl, headers}){
        this.baseUrl = baseUrl
        this.headers = headers
    }
    getData(){
        return fetch(this.baseUrl, {
            method: 'GET',
            headers: this.headers
          })
            .then(res => {
              if (res.ok) {
                return res.json();
              }
              return Promise.reject(`Ошибка: ${res.status}`);
            })
    }
}