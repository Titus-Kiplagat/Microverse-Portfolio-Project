const menuOpenBtn = document.querySelector('.menu-open-btn');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const navbarBtns = document.querySelectorAll('.navbar-btn');

const toggleMenu = () => {
  const mobileMenu = document.getElementById('mobile-navbar');
  mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
};

menuOpenBtn.addEventListener('click', toggleMenu);
menuCloseBtn.addEventListener('click', toggleMenu);

navbarBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    toggleMenu();
    const targetSectionId = e.target.getAttribute('href');
    const targetSection = document.querySelector(targetSectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const projectList = [
  {
    id: 1,
    title: 'Multi-Post Stories Gain+Glory',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tags: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    imageUrl: './assets/img/Img Plaholder.svg',
    live: 'https://titus-kiplagat.github.io/Microverse-Portfolio-Project/',
    source: 'https://github.com/Titus-Kiplagat/Microverse-Portfolio-Project',
  },
  {
    id: 2,
    title: 'Multi-Post Stories Gain+Glory',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tags: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    imageUrl: './assets/img/Img Plaholder.svg',
    live: 'https://titus-kiplagat.github.io/Microverse-Portfolio-Project/',
    source: 'https://github.com/Titus-Kiplagat/Microverse-Portfolio-Project',
  },
  {
    id: 3,
    title: 'Multi-Post Stories Gain+Glory',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tags: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    imageUrl: './assets/img/Img Plaholder.svg',
    live: 'https://titus-kiplagat.github.io/Microverse-Portfolio-Project/',
    source: 'https://github.com/Titus-Kiplagat/Microverse-Portfolio-Project',
  },
  {
    id: 4,
    title: 'Multi-Post Stories Gain+Glory',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tags: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    imageUrl: './assets/img/Img Plaholder.svg',
    live: 'https://titus-kiplagat.github.io/Microverse-Portfolio-Project/',
    source: 'https://github.com/Titus-Kiplagat/Microverse-Portfolio-Project',
  },
  {
    id: 5,
    title: 'Multi-Post Stories Gain+Glory',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tags: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    imageUrl: './assets/img/Img Plaholder.svg',
    live: 'https://titus-kiplagat.github.io/Microverse-Portfolio-Project/',
    source: 'https://github.com/Titus-Kiplagat/Microverse-Portfolio-Project',
  },
  {
    id: 6,
    title: 'Multi-Post Stories Gain+Glory',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tags: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    imageUrl: './assets/img/Img Plaholder.svg',
    live: 'https://titus-kiplagat.github.io/Microverse-Portfolio-Project/',
    source: 'https://github.com/Titus-Kiplagat/Microverse-Portfolio-Project',
  },
];

const createCard = (project) => {
  const card = document.createElement('article');
  card.className = 'card';

  const cardImage = document.createElement('div');
  cardImage.className = 'card-image';
  const image = document.createElement('img');
  image.src = project.imageUrl;
  image.alt = 'Project Screenshot';
  cardImage.appendChild(image);

  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';

  const cardTitle = document.createElement('h2');
  cardTitle.className = 'card-title';
  cardTitle.textContent = project.title;

  const cardItems = document.createElement('ul');
  cardItems.className = 'card-items';
  project.tags.forEach((tag) => {
    const fragment = new DocumentFragment();
    const cardItem = document.createElement('li');
    cardItem.className = 'card-item';
    cardItem.textContent = tag;
    fragment.appendChild(cardItem);
    cardItems.appendChild(fragment);
  });

  const cardButton = document.createElement('button');
  cardButton.className = 'card-button btn-hover';
  const cardButtonLink = document.createElement('a');
  cardButtonLink.href = '#';
  cardButtonLink.textContent = 'See Project';
  cardButton.appendChild(cardButtonLink);

  cardContent.appendChild(cardTitle);
  cardContent.appendChild(cardItems);
  cardContent.appendChild(cardButton);

  card.appendChild(cardImage);
  card.appendChild(cardContent);

  return card;
};

const cardsContainer = document.querySelector('#cards-container');
projectList.forEach((project) => {
  const fragment = new DocumentFragment();
  const card = createCard(project);
  fragment.appendChild(card);
  cardsContainer.appendChild(fragment);
});