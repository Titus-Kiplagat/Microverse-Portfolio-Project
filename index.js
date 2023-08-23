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

// WORK SECTION PROJECTS ARRAY

const projectList = [
  {
    id: 1,
    mobileCloseIconPath: './assets/Icon - Cancel.svg',
    desktopCloseIconPath: './assets/Icon - Cancel-Desktop.svg',
    title: 'To-Do List App',
    projectTitle: 'Streamlining Daily Tasks with Our To-Do List Application',
    desc: [
      'This To-Do List App is designed to simplify your daily life by helping you stay organized and focused. It provides an intuitive platform to manage your tasks efficiently, ensuring nothing important slips through the cracks.',
      "With features like task prioritization, due dates, and customizable lists, you can tailor your to-do lists to your unique needs. Whether it's work-related projects or personal errands, our app has you covered.",
    ],
    tags: ['Javascript', 'HTML', 'CSS'],
    mobileTags: ['Javacript', 'HTML', 'CSS'],
    desktopTags: [
      'HTML',
      'GitHub',
      'Javascript',
      'CSS',
    ],
    imageUrl: './assets/img/taskade-sreenshot.jpg',
    modalDesktopImageUrl: './assets/img/taskade-sreenshot.jpg',
    modalMobileImageUrl: './assets/img/taskade-sreenshot.jpg',
    live: 'https://titus-kiplagat.github.io/Taskade/',
    source: 'https://github.com/Titus-Kiplagat/Taskade',
  },
  {
    id: 2,
    mobileCloseIconPath: './assets/Icon - Cancel.svg',
    desktopCloseIconPath: './assets/Icon - Cancel-Desktop.svg',
    title: 'Multi-Post Stories Gain+Glory',
    projectTitle: 'Keeping track of hundreds of components',
    desc: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
    ],
    tags: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    mobileTags: ['Ruby on Rails', 'CSS', 'Javascript'],
    desktopTags: [
      'Codekit',
      'GitHub',
      'Javascript',
      'Boostrap',
      'Terminal',
      'Codepen',
    ],
    imageUrl: './assets/img/Img Plaholder.svg',
    modalDesktopImageUrl: './assets/Snapshoot Portfolio.svg',
    modalMobileImageUrl: './assets/Snapshoot Portfolio (1).svg',
    live: 'https://titus-kiplagat.github.io/Microverse-Portfolio-Project/',
    source: 'https://github.com/Titus-Kiplagat/Microverse-Portfolio-Project',
  },
  {
    id: 3,
    mobileCloseIconPath: './assets/Icon - Cancel.svg',
    desktopCloseIconPath: './assets/Icon - Cancel-Desktop.svg',
    title: 'Multi-Post Stories Gain+Glory',
    projectTitle: 'Keeping track of hundreds of components',
    desc: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
    ],
    tags: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    mobileTags: ['Ruby on Rails', 'CSS', 'Javascript'],
    desktopTags: [
      'Codekit',
      'GitHub',
      'Javascript',
      'Boostrap',
      'Terminal',
      'Codepen',
    ],
    imageUrl: './assets/img/Img Plaholder.svg',
    modalDesktopImageUrl: './assets/Snapshoot Portfolio.svg',
    modalMobileImageUrl: './assets/Snapshoot Portfolio (1).svg',
    live: 'https://titus-kiplagat.github.io/Microverse-Portfolio-Project/',
    source: 'https://github.com/Titus-Kiplagat/Microverse-Portfolio-Project',
  },
  {
    id: 4,
    mobileCloseIconPath: './assets/Icon - Cancel.svg',
    desktopCloseIconPath: './assets/Icon - Cancel-Desktop.svg',
    title: 'Multi-Post Stories Gain+Glory',
    projectTitle: 'Keeping track of hundreds of components',
    desc: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
    ],
    tags: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    mobileTags: ['Ruby on Rails', 'CSS', 'Javascript'],
    desktopTags: [
      'Codekit',
      'GitHub',
      'Javascript',
      'Boostrap',
      'Terminal',
      'Codepen',
    ],
    imageUrl: './assets/img/Img Plaholder.svg',
    modalDesktopImageUrl: './assets/Snapshoot Portfolio.svg',
    modalMobileImageUrl: './assets/Snapshoot Portfolio (1).svg',
    live: 'https://titus-kiplagat.github.io/Microverse-Portfolio-Project/',
    source: 'https://github.com/Titus-Kiplagat/Microverse-Portfolio-Project',
  },
  {
    id: 5,
    mobileCloseIconPath: './assets/Icon - Cancel.svg',
    desktopCloseIconPath: './assets/Icon - Cancel-Desktop.svg',
    title: 'Multi-Post Stories Gain+Glory',
    projectTitle: 'Keeping track of hundreds of components',
    desc: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
    ],
    tags: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    mobileTags: ['Ruby on Rails', 'CSS', 'Javascript'],
    desktopTags: [
      'Codekit',
      'GitHub',
      'Javascript',
      'Boostrap',
      'Terminal',
      'Codepen',
    ],
    imageUrl: './assets/img/Img Plaholder.svg',
    modalDesktopImageUrl: './assets/Snapshoot Portfolio.svg',
    modalMobileImageUrl: './assets/Snapshoot Portfolio (1).svg',
    live: 'https://titus-kiplagat.github.io/Microverse-Portfolio-Project/',
    source: 'https://github.com/Titus-Kiplagat/Microverse-Portfolio-Project',
  },
  {
    id: 6,
    mobileCloseIconPath: './assets/Icon - Cancel.svg',
    desktopCloseIconPath: './assets/Icon - Cancel-Desktop.svg',
    title: 'Multi-Post Stories Gain+Glory',
    projectTitle: 'Keeping track of hundreds of components',
    desc: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
    ],
    tags: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    mobileTags: ['Ruby on Rails', 'CSS', 'Javascript'],
    desktopTags: [
      'Codekit',
      'GitHub',
      'Javascript',
      'Boostrap',
      'Terminal',
      'Codepen',
    ],
    imageUrl: './assets/img/Img Plaholder.svg',
    modalDesktopImageUrl: './assets/Snapshoot Portfolio.svg',
    modalMobileImageUrl: './assets/Snapshoot Portfolio (1).svg',
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

const createButtonWithIcon = (className, text, iconPath, url) => {
  const button = document.createElement('button');
  button.className = 'btn';
  const buttonText = document.createElement('a');
  buttonText.href = url;
  buttonText.target = '_blank';
  buttonText.className = className;
  buttonText.textContent = text;
  const icon = document.createElement('img');
  icon.src = iconPath;
  icon.alt = `${text} icon`;
  button.appendChild(buttonText);
  button.appendChild(icon);
  return button;
};

const createModal = (project) => {
  const modal = document.createElement('div');
  modal.className = 'modal';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  const closeMobileButton = document.createElement('button');
  closeMobileButton.className = 'close-mobile';
  const closeMobileIcon = document.createElement('img');
  closeMobileIcon.src = project.mobileCloseIconPath;
  closeMobileIcon.alt = 'modal close button';
  closeMobileButton.appendChild(closeMobileIcon);

  const closeDesktopButton = document.createElement('button');
  closeDesktopButton.className = 'close-desktop';
  const closeDesktopIcon = document.createElement('img');
  closeDesktopIcon.src = project.desktopCloseIconPath;
  closeDesktopIcon.alt = 'modal close button';
  closeDesktopButton.appendChild(closeDesktopIcon);

  const projectDetails = document.createElement('div');
  projectDetails.className = 'project-details';

  const projectImage = document.createElement('div');
  projectImage.className = 'project-image';
  const desktopImage = document.createElement('img');
  desktopImage.src = project.modalDesktopImageUrl;
  desktopImage.alt = 'Project Screenshot';
  projectImage.appendChild(desktopImage);
  const mobileImage = document.createElement('img');
  mobileImage.src = project.modalMobileImageUrl;
  mobileImage.alt = 'Project Screenshot';
  projectImage.appendChild(mobileImage);

  const projectInfo = document.createElement('div');
  projectInfo.className = 'project-info';

  const projectTitleWrapper = document.createElement('div');
  projectTitleWrapper.className = 'project-title-wrapper';
  const projectTitle = document.createElement('h3');
  projectTitle.className = 'project-title';
  projectTitle.textContent = project.projectTitle;

  const buttonContainerDesktop = document.createElement('div');
  buttonContainerDesktop.className = 'button-container-desktop';
  const liveButtonDesktop = createButtonWithIcon(
    'btn-live',
    'See live',
    './assets/see_live_icon.svg',
    project.live,
  );
  liveButtonDesktop.href = project.live;
  const sourceButtonDesktop = createButtonWithIcon(
    'btn-source',
    'See source',
    './assets/github_white.svg',
    project.source,
  );
  sourceButtonDesktop.href = project.live;

  buttonContainerDesktop.appendChild(liveButtonDesktop);
  buttonContainerDesktop.appendChild(sourceButtonDesktop);
  projectTitleWrapper.appendChild(projectTitle);
  projectTitleWrapper.appendChild(buttonContainerDesktop);

  const mobileProjectTags = document.createElement('ul');
  mobileProjectTags.className = 'card-items project-tags';
  project.mobileTags.forEach((tag) => {
    const tagItem = document.createElement('li');
    tagItem.className = 'tag card-item';
    tagItem.textContent = tag;
    mobileProjectTags.appendChild(tagItem);
  });

  const desktopProjectTags = document.createElement('ul');
  desktopProjectTags.className = 'card-items project-tags';
  project.desktopTags.forEach((tag) => {
    const tagItem = document.createElement('li');
    tagItem.className = 'tag card-item';
    tagItem.textContent = tag;
    desktopProjectTags.appendChild(tagItem);
  });

  const projectDescription = document.createElement('div');
  projectDescription.className = 'project-description';
  project.desc.forEach((paragraph) => {
    const descParagraph = document.createElement('p');
    descParagraph.className = 'paragraph-desc';
    descParagraph.textContent = paragraph.trim();
    projectDescription.appendChild(descParagraph);
  });

  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';
  const liveButton = createButtonWithIcon(
    'btn-live',
    'See live',
    './assets/see_live_icon.svg',
    project.live,
  );

  const sourceButton = createButtonWithIcon(
    'btn-source',
    'See source',
    './assets/github_white.svg',
    project.source,
  );

  buttonContainer.appendChild(liveButton);
  buttonContainer.appendChild(sourceButton);

  // Append the elements to the modal content
  projectInfo.appendChild(projectTitleWrapper);
  projectInfo.appendChild(mobileProjectTags);
  projectInfo.appendChild(desktopProjectTags);
  projectInfo.appendChild(projectDescription);
  projectInfo.appendChild(buttonContainer);
  projectDetails.appendChild(projectImage);
  projectDetails.appendChild(projectInfo);

  modalContent.appendChild(projectDetails);
  modalContent.appendChild(closeMobileButton);
  modalContent.appendChild(closeDesktopButton);

  modal.appendChild(modalContent);

  return modal;
};

let isModalOpen = false;
const modalContainer = document.querySelector('.modal-container');
const displayModal = (projectId) => {
  if (isModalOpen) return;
  const project = projectList.find((project) => project.id === projectId);

  if (!project) return;

  const modal = createModal(project);
  modalContainer.appendChild(modal);

  const closeModal = () => {
    modalContainer.removeChild(modal);
    isModalOpen = false;
  };

  const closeMobileButton = modal.querySelector('.close-mobile');
  const closeDesktopButton = modal.querySelector('.close-desktop');

  closeMobileButton.addEventListener('click', closeModal);
  closeDesktopButton.addEventListener('click', closeModal);

  isModalOpen = true;
};
// Create event listener for "See Project" button
const cardButtons = document.querySelectorAll('.card-button');
cardButtons.forEach((cardButton, index) => {
  cardButton.addEventListener('click', () => {
    displayModal(projectList[index].id);
  });
});

// validate form
const form = document.querySelector('#form');
const email = document.querySelector('#email');

const isRequired = (value) => value !== '';
const isLowerCase = (email) => email === email.toLowerCase();

const showErrorMessage = (message) => {
  // get the form-field element
  const inputField = document.querySelector('.input-content');
  // add the error class
  inputField.classList.remove('success');
  inputField.classList.add('error');

  // show the error message
  const error = document.querySelector('#error-message');
  error.textContent = message;
};

const showSuccessMessage = () => {
  // get the form-field element
  const inputField = document.querySelector('.input-content');

  // remove the error class
  inputField.classList.remove('error');
  inputField.classList.add('success');

  // hide the error message
  const error = document.querySelector('.error-message');
  error.textContent = '';
};

const validateEmail = () => {
  let validate = false;
  const emailInput = email.value.trim();
  if (!isRequired(emailInput)) {
    showErrorMessage('Email cannot be blank.');
  } else if (!isLowerCase(emailInput)) {
    showErrorMessage('Email should be in Lower Case characters.');
  } else {
    showSuccessMessage();
    validate = true;
  }
  return validate;
};

form.addEventListener('submit', (event) => {
  // prevent the form from submitting
  // validate fields
  const isEmailValid = validateEmail();

  const isFormValid = isEmailValid;

  if (!isFormValid) {
    event.preventDefault();
  }
});

const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    // cancel the previous timer
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // setup a new timer
    timeoutId = setTimeout(() => { fn(...args); }, delay);
  };
};

form.addEventListener('input', debounce((e) => {
  switch (e.target.id) {
    case 'email':
      validateEmail();
      break;
    default:
    // do nothing
  }
}));
