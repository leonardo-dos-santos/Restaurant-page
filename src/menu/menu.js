export default function createMenuPage() {
  const content = document.getElementById('content');

  const heading = document.createElement('h1');
  heading.textContent = "Our Menu";

  const paragraph = document.createElement('p');
  paragraph.textContent = "Explore our delicious menu items crafted by our talented chefs.";

  const menuList = document.createElement('ul');
  const items = ["Pizza", "Pasta", "Salad", "Desserts"];
  items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    menuList.appendChild(listItem);
  });

  content.appendChild(heading);
  content.appendChild(paragraph);
  content.appendChild(menuList);
}
