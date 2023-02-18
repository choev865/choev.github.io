
const scrollBtn = document.getElementById('scroll-btn');

scrollBtn.addEventListener('click', function() 
{
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});

var i = 0;
var txt = '911 emergency operator 625. What is the address of the emergency? ';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


var i = 0;
var txt = '...';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}





