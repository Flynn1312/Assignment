
  (function() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slides = document.querySelector('.slides');
    let currentIndex = 0;
    
    const showSlide = (index) => {
      slides.style.transform = `translateX(-${index * 100}%)`;
    }
    
    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % slides.children.length;
      showSlide(currentIndex);
    }
    
    const prevSlide = () => {
      currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
      showSlide(currentIndex);
    } 
    
    const autoSlide = () => nextSlide();
    
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    setInterval(autoSlide, 3000);
   })();


function drop() {
  document.getElementById("drop").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var drop = document.getElementById("drop");
    if (drop.classList.contains('show')) {
      drop.classList.remove('show');
    }
  }
} 

function drop1() {
  document.getElementById("drop1").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var drop1 = document.getElementById("drop1");
    if (drop1.classList.contains('show')) {
      mydrop1.classList.remove('show');
    }
  }
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}