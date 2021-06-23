function scrollArea(){
    var text=document.querySelector('.intro-text');
    var startPosition=text.getBoundingClientRect().top;
    var screenPosition=window.innerHeight/1.3;

    if(startPosition<screenPosition){
        text.classList.add('intro-appear');
    }
}

window.addEventListener('scroll',scrollArea);