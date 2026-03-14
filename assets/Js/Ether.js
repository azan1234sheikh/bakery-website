const carouselInner = document.querySelector('.carousel-inner');
const images = document.querySelectorAll('.carousel-item img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentImageIndex = 0;


prevButton.addEventListener('click', () => {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  updateCarousel();

});

function updateCarousel() {
  images.forEach((image, index) => {
    if (index === currentImageIndex) {
      image.classList.add('focused');
    } else {
      image.classList.remove('focused');
    }
  });
  
}

document.addEventListener('DOMContentLoaded',()=>{
     const dialog  =document.getElementById('my-dialog');
    const openbtn = document.getElementById('open-btn');
    const closebtn  =document.getElementById('close');
    openbtn.addEventListener('click',()=>{
      let ad = dialog.showModal();
      
      console.log(ad);
    });
    closebtn.addEventListener('click',()=>{
      dialog.close();
    });

})


