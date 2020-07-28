// slider
let leftSlideBtn = document.querySelector('.left');
let rightSlideBtn = document.querySelector('.right');
let sliderTrack = document.querySelector('.slider-track');

let count = 0;

const leftSlider = e => {
    if (count !== 0) {
        count += 446;
        e.style.marginLeft = `${count}px`;
    }
}

const rightSlider = e => {
    if (count !== -892) {
        count -= 446;
        e.style.marginLeft = `${count}px`;
    }
}

leftSlideBtn.addEventListener('click', () => leftSlider(sliderTrack))
rightSlideBtn.addEventListener('click', () => rightSlider(sliderTrack))