const counterBox = document.querySelector('.counter');
let re = /(?=\B(?:\d{3})+(?!\d))/g;

(function (){
    fetch('../state.json',{
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
        .then(function(response){
            return response.json();
        })
        .then(function(myJson) {
            for(let i in myJson)(
                counterBox.innerHTML += `
                        <div class="counter__item">
                           <p>${myJson[i].toString().replace( re, ',' )}</p>
                           <p>${i}</p>
                        </div>
                `
            )
        });
}
())
