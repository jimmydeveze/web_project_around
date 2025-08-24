//Section to update the profile name

let saveForm = document.querySelector("#save_form");

const editPopup = document.querySelector("#edit__profile");
const openEditPopup = document.querySelector("#open_edit_popup");
const closeEditPopup = document.querySelector("#close_edit_popup");

const profileName = document.querySelector("#profile_name");
const profileAboutMe = document.querySelector("#profile_about_me");

const inputName = document.querySelector("#popup_input_name");
const inputBAboutMe = document.querySelector("#popup_input_about");

openEditPopup.addEventListener("click", function () {
  editPopup.showModal();
});

function loadValues() {
  inputName.value = profileName.textContent.trim(" ");
  inputBAboutMe.value = profileAboutMe.textContent;
}

openEditPopup.addEventListener("click", loadValues);

closeEditPopup.addEventListener("click", function () {
  editPopup.close();
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileAboutMe.textContent = inputBAboutMe.value;

  editPopup.close();
}

saveForm.addEventListener("submit", handleProfileFormSubmit);

//Section for the card template

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

// Función para crear una tarjeta
function createCard(cardData) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector("#card").cloneNode(true);

  const cardImage = cardElement.querySelector("#image");
  const cardTitle = cardElement.querySelector("#card-title");
  const likeButton = cardElement.querySelector("#like-button");
  const deleteButton = cardElement.querySelector("#delete-button");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  // Función para dar me gusta
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-active");
  });

  // Función para borrar una tarjeta
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  return cardElement;
}

// Función para renderizar todas las tarjetas
function renderCards() {
  const cardsContainer = document.querySelector("#cards");

  initialCards.forEach((cardData) => {
    const cardElement = createCard(cardData);
    cardsContainer.appendChild(cardElement);
  });
}

// Inicializar cuando se carga la página
document.addEventListener("DOMContentLoaded", renderCards);
