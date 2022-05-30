const container=document.querySelector('.screen-container');
const seat=document.querySelectorAll('.row .seat:not(.occupied)');
console.log(seat);
console.log('Hii');
const movie=document.querySelector('#movie');
let ticketPrice=parseInt(movie.value);
console.log(ticketPrice);
console.log(typeof ticketPrice);
let seatsCount=document.querySelector('.count');
let totalAmount=document.querySelector('.amount');

let count=0;
let amount=0;


function updateAmount(input){
    console.log(input);
    if(input.classList.contains('seat')){
    input.classList.toggle('selected');
    // console.log('Working1');
    // console.log('Working2');
    if(input.classList.contains('selected')){
        count++;
    } else if (!input.classList.contains('selected')){
        count--;
    }
    }
    console.log(count);
    console.log(count*ticketPrice);
    seatsCount.innerHTML=count;
    totalAmount.innerHTML=count*ticketPrice;
}

movie.addEventListener('change',function(e){
    ticketPrice=movie.value;
    updateAmount(movie);
});

container.addEventListener('click',function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        updateAmount(e.target);
    }
});

