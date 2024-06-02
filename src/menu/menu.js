import './menu.css'

export default function createMenuPage() {
  const content = document.getElementById('content');

  const heading = document.createElement('h1');
  heading.textContent = "Our Menu";

  const paragraph = document.createElement('p');
  paragraph.textContent = "Explore our delicious menu items crafted by our talented chefs.";

  const menuList = document.createElement('ul');
  const items = [
    { name: "Pizza", image: "pizza.jpg" },
    { name: "Pasta", image: "pasta.jpg" },
    { name: "Salad", image: "salad.jpg" },
    { name: "Desserts", image: "desserts.jpg" }
  ];
  items.forEach(item => {
    const listItem = document.createElement('li');

    const itemImage = document.createElement('img');
    itemImage.src = `./img/${item.image}`;
    itemImage.alt = item.name;
    itemImage.width = 200; // Defina a largura da imagem conforme necessário

    const itemName = document.createElement('span');
    itemName.textContent = item.name;

    listItem.appendChild(itemImage);
    listItem.appendChild(itemName);
    menuList.appendChild(listItem);
  });

  content.appendChild(heading);
  content.appendChild(paragraph);
  content.appendChild(menuList);
}
