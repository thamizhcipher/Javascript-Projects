const red= document.querySelector('.red');
const cyan= document.querySelector('.cyan');
const violet= document.querySelector('.violet');
const orange= document.querySelector('.orange');
const pink= document.querySelector('.pink');

const Getbgcolor=(selected)=>{
    return window.getComputedStyle(selected).backgroundColor;
}
console.log(Getbgcolor(cyan))