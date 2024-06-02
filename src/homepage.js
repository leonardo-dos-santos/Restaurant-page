function loadHomePage() {
  const content = document.getElementById('content');

  const headline = document.createElement('h1');
  headline.textContent = "Welcome to our Restaurant!";

  const image = document.createElement('img');
  image.src = './img/restaurant-img.jpg'
  image.alt = 'Restaurant Image';

  const description = document.createElement('p');
  description.textContent = "We serve the best food in town. Come and enjoy our delicious meals!";

  content.appendChild(headline);
  content.appendChild(image);
  content.appendChild(description);
  
}

export default loadHomePage;