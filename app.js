const text = document.querySelector('.fancy');

const slices = text.textContent.split("");

console.log(slices);
text.textContent = "";
for(let i=0; i<slices.length; i++){
    text.innerHTML += "<span>" + slices[i] + "</span>";
}


let char = 0;
let timer = setInterval(ani,50);

function ani(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === slices.length){
        complete();
        return;
    }

}

function complete(){
    clearInterval(timer);
    timer = null;
}
