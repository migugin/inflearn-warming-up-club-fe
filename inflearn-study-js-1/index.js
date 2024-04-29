import data from './data.js';

const navigation = document.querySelector('.navigation');
const menuList = document.querySelector('.menu-list');
const menuItem = document.querySelector('.menu-item');

const setElementContent = (element, content) => {
  element.innerHTML = content;
};

const setImageAttributes = (imageElement, src, altText) => {
  imageElement.src = src;
  imageElement.alt = altText;
};

const getContent = ({ name, imgUrl, description, price }) => {
  const content = menuItem.cloneNode(true);
  const [titleElement, imgContainer, descriptionElement, priceElement] =
    content.children;

  setElementContent(titleElement, name);
  setImageAttributes(imgContainer.firstElementChild, imgUrl, `${name} 이미지`);
  setElementContent(descriptionElement, description);
  setElementContent(priceElement, `${price}원`);

  return content;
};

const renderMenuList = menu => {
  const renderList = menu.map(item => getContent(item));

  menuList.replaceChildren(...renderList);
};

const getRenderData = e => {
  const filter = e.target.id.replace('select-', '');
  const renderData = filter === 'all' ? data : data.filter(item => item.type === filter);

  return renderData;
};

navigation.addEventListener('change', e => {
  renderMenuList(getRenderData(e));
});

renderMenuList(data);
