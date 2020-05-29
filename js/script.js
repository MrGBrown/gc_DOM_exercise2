const boxMenu = document.querySelector('.section1');
const hamburgerMenu = document.getElementById('hamburger');
const aTagNumbers = document.getElementById('numberlink');
const aTagLetters = document.getElementById('letterlink');

aTagNumbers.addEventListener('click', function(e){
    document.getElementById('letters').style.display = "none";
    document.getElementById('numbers').style.display = "block";
    boxMenu.style.display = "none";
    e.preventDefault();
});

aTagLetters.addEventListener('click', function(f){
    document.getElementById('letters').style.display = "block";
    document.getElementById('numbers').style.display = "none";
    boxMenu.style.display = "none";
    f.preventDefault();
});

hamburgerMenu.addEventListener('click', function(g){
    document.querySelector(".section1").style.display = "block";
    g.preventDefault();
});

// document.getElementById('hamburger').onclick = function showMenu() {   
//     document.querySelector(".section1").style.display = "block";
// };

// document.getElementById('numberlink').onclick = function showNumbers() {   

// };

// document.getElementById('letterlink').onclick = function showLetters() {   

// };

