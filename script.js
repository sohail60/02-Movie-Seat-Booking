const container=document.querySelector('.screen-container');
const seat=document.querySelectorAll('.row .seat:not(.occupied)');
console.log('Hii');
const movie=document.querySelector('#movie');
const ticketPrice=movie.value;
const seatsCount=document.getElementsByClassName('count');
const totalAmount=document.getElementsByClassName('amount');

let count=0;
let amount=0;

container.addEventListener('click',function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        if(e.target.classList.contains('selected')){
            count++;
        } else if (!e.target.classList.contains('selected')){
            count--;
        }
    }
    console.log(count);
    console.log(count*ticketPrice);
    seatsCount.innerText=count;
    totalAmount.innerText=count*ticketPrice;
});

