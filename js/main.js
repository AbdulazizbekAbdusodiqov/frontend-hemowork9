
function activeSlide(){
    let container = document.querySelector('.slider');
    let slides = Array.from(container.children);
    
    container.innerHTML = ''; 
    container.appendChild(slides[2]); 
    container.appendChild(slides[0]); 
    container.appendChild(slides[1]);
}

document.querySelector(".next").addEventListener("click", ()=> {    
    activeSlide()
})