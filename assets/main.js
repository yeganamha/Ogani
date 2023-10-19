

let next = document.querySelector('.next');
let previous =document.querySelector('.previous');
let img = document.querySelector('.slider img');
let index =0;

let slider = document.getElementById("myRange");
let output = document.getElementById("value");

const slideImages =[
    '/assets/images/basket.jpg',
    '/assets/images/apple.jpg',
    '/assets/images/bananas.jpg',
    '/assets/images/crisp.jpg'
]

img.src =slideImages[index]

function autoPlay(){
    index++;
    if(index>=slideImages.length-1){
        index=0;
    }
    img.src = slideImages[index];
}

next.onclick = function (){
    index++;
    if(index>=slideImages.length-1){
        index=0;
    }
    img.src = slideImages[index];
}
previous.onclick =function(){
    index--;
    if(index===-1){
        index = slideImages.length-1;
    }
    img.src =slideImages[index];

}
// setInterval(() =>{
// autoPlay()
// }, 3000)






output.innerHTML = slider.value;
slider.oninput = function(){
    output.innerHTML = this.value;
}
slider.addEventListener("mousemove", function(){
    let x = slider.value;
    let color = 'linear-gradient(90deg, red'+ x + '%, white'+ x + '%)';
    slider.style.background=color;
})


