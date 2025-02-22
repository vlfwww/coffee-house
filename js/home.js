const img = document.querySelector('.coffee_slider .wrapper .center .center_img img');
const images = ['../images/coffee-slider-1.png', '../images/coffee-slider-2.png', '../images/coffee-slider-3.png'];
let i = 0;
const coffee = [
    {path: '../images/coffee-slider-1.png', title: 'S’mores Frappuccino', description: 'This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.', price: '$5.50'},
    {path: '../images/coffee-slider-2.png', title: 'Caramel Macchiato', description: 'Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.', price: '$5.00'},
    {path: '../images/coffee-slider-3.png', title: 'Ice coffee', description: 'A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.', price: '$4.50'},
];

const title = document.querySelector('.coffee_slider .wrapper .center .center_text .slider_title');
const description = document.querySelector('.coffee_slider .wrapper .center .center_text .slider_description');
const price = document.querySelector('.coffee_slider .wrapper .center .center_text .slider_price');
const sliderLines = document.querySelectorAll('.coffee_slider .wrapper .center .line p')

document.querySelector('.slider_button_left').addEventListener('click', function() {
    i = (i === 0) ? coffee.length - 1 : i - 1;
    updateSlider();
    for(let a=0; a<sliderLines.length; a++)
    {
        sliderLines[a].className = '';
        if(i==a){
            sliderLines[a].className = 'brown';
        }
    }
});

document.querySelector('.slider_button_right').addEventListener('click', function() {
    i = (i === coffee.length - 1) ? 0 : i + 1;
    updateSlider();
    for(let a=0; a<sliderLines.length; a++)
    {
        sliderLines[a].className = '';
        if(i==a){
            sliderLines[a].className = 'brown';
        }
    }
});

function updateSlider() {
    img.src = coffee[i].path;
    title.textContent = coffee[i].title;
    description.textContent = coffee[i].description;
    price.textContent = coffee[i].price;
}