const container=document.querySelector('.screen-container');
const seat=document.querySelectorAll('.row .seat:not(.occupied)');
console.log('Hii');
const movie=document.querySelector('#movie');
let ticketPrice=parseInt(movie.value);
let seatsCount=document.querySelector('.count');
let totalAmount=document.querySelector('.amount');
let count=0;
let amount=0;

populateUI();

function setMovieData(movieIndex,moviePrice){
    localStorage.setItem('selectedMovie',movieIndex);
    localStorage.setItem('selectedPrice',moviePrice);
    localStorage.setItem('seatCount',count);
}

function updateAmount(input){
    console.log(input);
    if(input.classList.contains('seat')){
    input.classList.toggle('selected');
    }

    let selectedSeats=document.querySelectorAll('.row .seat.selected');
    let seatsIndex = [...selectedSeats].map(function(currentSeat){
        return [...seat].indexOf(currentSeat);
    });
    
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));    
    count=selectedSeats.length;
    seatsCount.innerHTML=count;
    totalAmount.innerHTML=count*ticketPrice;
    localStorage.setItem('selectedSeatsCount',count);
}

function populateUI(){
    selectedSeats=JSON.parse(localStorage.getItem('selectedSeats'));

    if(selectedSeats !== null && selectedSeats.length>0){
        seat.forEach(function(currentSeat,index){
            if(selectedSeats.indexOf(index)>-1){
                currentSeat.classList.add('selected');
            }
        });
    }
    selectedIndex=localStorage.getItem('selectedMovie');
    if(selectedIndex!== null){
        movie.selectedIndex=selectedIndex;
    }

    selectedPrice=localStorage.getItem('selectedPrice');
    if(selectedPrice!== null){
        movie.value=selectedPrice;
    }

    count=localStorage.getItem('selectedSeatsCount');
    if(selectedIndex!== null){
        seatsCount.innerHTML=count;
        ticketPrice=movie.value;
        totalAmount.innerHTML=count*ticketPrice;
    }
}
movie.addEventListener('change',function(e){
        ticketPrice=movie.value;
        updateAmount(movie);
        setMovieData(movie.selectedIndex,movie.value);
});

container.addEventListener('click',function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        updateAmount(e.target);
    }
});