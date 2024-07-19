function toggleDropdown() {
  var content = document.getElementById("dropdown-content");
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

function toggleDropdown1() {
  var content = document.getElementById("dropdown-content1");
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

function toggleDropdown2() {
  var content = document.getElementById("dropdown-content2");
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

function toggleDropdown3() {
  var content = document.getElementById("dropdown-content3");
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

let currentIndex = 0;

    function showCard(index) {
        const carouselWrapper = document.querySelector('.carousel-wrapper');
        const totalCards = document.querySelectorAll('.card').length;
        
        if (index >= totalCards) currentIndex = 0;
        if (index < 0) currentIndex = totalCards - 1;
        
        carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextCard() {
        currentIndex++;
        showCard(currentIndex);
    }

    function prevCard() {
        currentIndex--;
        showCard(currentIndex);
    }