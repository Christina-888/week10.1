function showMessage() {
  return 'Я учу Java Script!';
}
console.log(showMessage());

const image = document.getElementById('winter-time');
console.log(image);

function showNextImage() { 
  image.src='assets/img/jpeg/summer.jpg';
} 

function showPreviousImage() {
  image.src='assets/img/jpeg/winter.jpg';
}
