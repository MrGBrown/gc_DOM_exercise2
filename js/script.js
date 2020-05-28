const boxMenu = document.querySelector(".section1");
const aTagNumbers = document.getElementById('numberlink');
const aTagLetters = document.getElementById('letterlink');

aTagNumbers.addEventListener('click', function(e){
    e.preventDefault();
});

aTagLetters.addEventListener('click', function(f){
    f.preventDefault();
});

document.getElementById('hamburger').onclick = function showMenu() {   
    document.querySelector(".section1").style.display = "block";
 };

document.getElementById('numberlink').onclick = function showNumbers() {   
    document.getElementById('letters').style.display = "none";
    document.getElementById('numbers').style.display = "block";
    boxMenu.style.display = "none";
 };

document.getElementById('letterlink').onclick = function showLetters() {   
    document.getElementById('letters').style.display = "block";
    document.getElementById('numbers').style.display = "none";
    boxMenu.style.display = "none";
 };
