const pfeCard1 = document.querySelector('#pfeCard1');
const pfeCardText1 = document.querySelector('#pfeCardText1');
const pfeCard2 = document.querySelector('#pfeCard2');
const pfeCardText2 = document.querySelector('#pfeCardText2');
const pfeCard3 = document.querySelector('#pfeCard3');
const pfeCardText3 = document.querySelector('#pfeCardText3');
const pfeCard4 = document.querySelector('#pfeCard4');
const pfeCardText4 = document.querySelector('#pfeCardText4');
const pfeCard5 = document.querySelector('#pfeCard5');
const pfeCardText5 = document.querySelector('#pfeCardText5');
const pfeCard6 = document.querySelector('#pfeCard6');
const pfeCardText6 = document.querySelector('#pfeCardText6');



pfeCard1.addEventListener('click', () => {
   pfeCard1.classList.toggle('flip-elem');
   showText1();
});
pfeCard2.addEventListener('click', () => {
   pfeCard2.classList.toggle('flip-elem');
   showText2();
});
pfeCard3.addEventListener('click', () => {
   pfeCard3.classList.toggle('flip-elem');
   showText3();
});
pfeCard4.addEventListener('click', () => {
   pfeCard4.classList.toggle('flip-elem');
   showText4();
});
pfeCard5.addEventListener('click', () => {
   pfeCard5.classList.toggle('flip-elem');
   showText5();
});
pfeCard6.addEventListener('click', () => {
   pfeCard6.classList.toggle('flip-elem');
   showText6();
});

function showText1() {
    pfeCardText1.classList.toggle('open');
    pfeCardText1.classList.toggle('show-content');
} 
function showText2() { 
   pfeCardText2.classList.toggle('open');
   pfeCardText2.classList.toggle('show-content');
}
function showText3() {
    pfeCardText3.classList.toggle('open');
    pfeCardText3.classList.toggle('show-content');
} 
function showText4() {
   pfeCardText4.classList.toggle('open');
   pfeCardText4.classList.toggle('show-content');
} 
function showText5() {
    pfeCardText5.classList.toggle('open');
    pfeCardText5.classList.toggle('show-content');
} 
function showText6(){
   pfeCardText6.classList.toggle('open');
   pfeCardText6.classList.toggle('show-content');
} 