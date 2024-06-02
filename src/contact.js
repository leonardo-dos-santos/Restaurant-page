function loadContact() {
  const content = document.getElementById('content');
  content.textContent = ''; // Clear previous content

  const headline = document.createElement('h1');
  headline.textContent = "Contact Us";

  const contactInfo = document.createElement('p');
  contactInfo.textContent = "Email: contact@restaurant.com\nPhone: 123-456-7890";

  content.appendChild(headline);
  content.appendChild(contactInfo);
}

export default loadContact;
