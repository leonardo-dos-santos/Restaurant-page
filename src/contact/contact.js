export default function createContactPage() {
  const content = document.getElementById('content');

  const heading = document.createElement('h1');
  heading.textContent = "Contact Us";

  const paragraph = document.createElement('p');
  paragraph.textContent = "We would love to hear from you. Contact us at the following address or phone number.";

  const address = document.createElement('p');
  address.textContent = "123 Food Street, Culinary City, Yumland";

  const phone = document.createElement('p');
  phone.textContent = "(123) 456-7890";

  content.appendChild(heading);
  content.appendChild(paragraph);
  content.appendChild(address);
  content.appendChild(phone);
}
