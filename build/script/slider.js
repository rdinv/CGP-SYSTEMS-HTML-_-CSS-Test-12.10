let slides=[
    {image:'images/1.png', title:'GODDEST PROJECT #1', percent1: '93.7%', percent2:'128%'},
    {image:'images/2.png', title:'GODDEST PROJECT #2', percent1: '95.1%', percent2:'136%'},
    {image:'images/3.png', title:'GODDEST PROJECT #3', percent1: '90.3%', percent2:'112%'},
    {image:'images/4.png', title:'GODDEST PROJECT #4', percent1: '96.7%', percent2:'157%'},
]
let currentSlide = 0;
function getSlide(slideId) {
    currentSlide = slideId;
    const { image, title, percent1, percent2 } = slides[slideId];
    document.getElementById("screen").src = image;
    document.getElementById("title").innerHTML = title;
    document.getElementById("percent1").innerHTML = percent1;
    document.getElementById("percent2").innerHTML = percent2;
    let square = document.getElementsByClassName('square');
    squareArr = Array.from(square);
    squareArr.forEach(element => {
        element.classList.remove('hoverActiv')
    });
    square[slideId].classList.add('hoverActiv');
}
function prevSlide(){
    if (currentSlide == 0) {
        getSlide(slides.length - 1);
    } else {
        getSlide(currentSlide - 1);
    }
};
function nextSlide(){
    if (currentSlide == slides.length - 1) {
        getSlide(0);
    } else {
        getSlide(currentSlide + 1);
    }
};