console.log("Вёрстка соответствует макету. Ширина экрана 1024px +40");
console.log("Вёрстка соответствует макету. Ширина экрана 768px +40");
console.log("Вёрстка соответствует макету. Ширина экрана 420px +20 (частично)");
console.log("Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +6");
console.log("На ширине экрана 1024рх и меньше реализовано адаптивное меню (не реализовано) +0");
console.log("Оптимизация скорости загрузки страницы (частично) +4");

console.log("ИТОГО", 40 + 40 + 20 + 6 + 4);


// slider
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const slides = document.querySelectorAll('.slide');


function changeSlideClass() {

    slide.classList.remove('active');
}



// функция слайдер вперед
function sliderForward(imageNumber) {
    imageNumber++;
    if (imageNumber > imagesAmount) {
        let imageNumber = 1;
    }
}
// функция слайдер назад
function sliderBackward(imageNumber) {
    imageNumber--;
    if (imageNumber > 1) {
        let imageNumber = 5;
    }
}

next.addEventListener('click', changeSlideClass);
prev.addEventListener('click', sliderBackward);




// количество картинок в слайдере
// imagesAmount = 5;


// переменная с путем
// const imageSource = "./assets/img/";

//переменная с номером картинки
// let imageNumber = 1;

//переменная с типом картинки
//const imageType = '.png';

// создаем  массив с помощью цикла
//for (let imageNumber = 1; imageNumber <= imagesAmount; imageNumber++) {
//  let arrayImages = [imageSource + imageNumber + imageType]; // задаем массив с картинками



//}