function loadMenu() {
  const content = document.getElementById('content');
  content.textContent = ''; // Clear previous content

  const headline = document.createElement('h1');
  headline.textContent = "Our Menu";

  const menuList = document.createElement('ul');
  const items = ['Pizza', 'Pasta', 'Salad'];
  items.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      menuList.appendChild(listItem);
  });

  content.appendChild(headline);
  content.appendChild(menuList);
}

export default loadMenu;