const openEditPopupButton = document.getElementById("open_edit_popup-button");
const openAddPopupButton = document.getElementById("open_add_card-button");

const profileName = document.getElementById("profile_name");
const profileAboutMe = document.getElementById("profile_about_me");

const cardsContainer = document.getElementById("cards");

let submitForm;
let popupDialog;
let closePopupButton;
let inputTitle;
let inputDescription;

function setElemntes(buttonId) {
  if (buttonId == "open_edit_popup-button") {
    submitForm = document.getElementById("save_form");
    popupDialog = document.getElementById("edit__profile");
    closePopupButton = document.getElementById("close_edit_popup");
    inputTitle = document.getElementById("popup_input_name");
    inputDescription = document.getElementById("popup_input_about");

    loadValues();

    submitForm.addEventListener("submit", handleProfileFormSubmit);

    console.log("espara el perfil");
  } else {
    submitForm = document.getElementById("add_place_form");
    popupDialog = document.getElementById("add__place");
    closePopupButton = document.getElementById("close_add_popup");
    inputTitle = document.getElementById("popup_input_title");
    inputDescription = document.getElementById("popup_input_link");

    submitForm.addEventListener("submit", handleAddCardFormSubmit);

    console.log("es para agregar una carta mas");
  }

  closePopupButton.onclick = function () {
    popupDialog.close();
  };
}

openEditPopupButton.onclick = function () {
  setElemntes(this.id);
  popupDialog.showModal();
};

openAddPopupButton.onclick = function () {
  setElemntes(this.id);
  popupDialog.showModal();
};

function loadValues() {
  inputTitle.value = profileName.textContent.trim(" ");
  inputDescription.value = profileAboutMe.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = inputTitle.value;
  profileAboutMe.textContent = inputDescription.value;

  popupDialog.close();
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();

  const newCardData = {
    name: inputTitle.value,
    link: inputDescription.value,
  };

  const newCardElement = createCard(newCardData);
  cardsContainer.prepend(newCardElement);

  popupDialog.close();
  submitForm.reset();
}

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

function createCard(cardData) {
  const cardTemplate = document.getElementById("card-template").content;
  const cardElement = cardTemplate.getElementById("card").cloneNode(true);

  const cardImage = cardElement.querySelector("#image");
  const cardTitle = cardElement.querySelector("#card-title");
  const likeButton = cardElement.querySelector("#like-button");
  const deleteButton = cardElement.querySelector("#delete-button");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-active");
  });

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  return cardElement;
}

function renderCards() {
  initialCards.forEach((cardData) => {
    const cardElement = createCard(cardData);
    cardsContainer.appendChild(cardElement);
  });
}

document.addEventListener("DOMContentLoaded", renderCards);

const imageDialog = document.getElementById("image-dialog");
const dialogImage = imageDialog.querySelector("#full_image");
const dialogCaption = imageDialog.querySelector("#image_caption");
const closeButton = imageDialog.querySelector("#image_close");

function openImageDialog(imageSrc, imageAlt) {
  dialogImage.src = imageSrc;
  dialogImage.alt = imageAlt;
  dialogCaption.textContent = imageAlt;

  imageDialog.showModal();
}

closeButton.addEventListener("click", () => {
  imageDialog.close();
});

cardsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("card__image")) {
    const cardImage = e.target;
    const imageSrc = cardImage.src;
    const imageAlt = cardImage.alt;

    openImageDialog(imageSrc, imageAlt);
  }
});
