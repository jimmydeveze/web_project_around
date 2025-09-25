import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import {
  openDialog,
  closeDialog,
  closeDialogClickOutside,
  openImageDialog,
} from "./utils.js";

const openEditPopupButton = document.getElementById("open_edit_popup-button");
const openAddPopupButton = document.getElementById("open_add_card-button");

const profileName = document.getElementById("profile_name");
const profileAboutMe = document.getElementById("profile_about_me");

const cardsContainer = document.getElementById("cards");

const imageDialog = document.getElementById("image-dialog");
const closeButton = imageDialog.querySelector("#image_close");

const validationConfig = {
  formSelector: "form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};

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

  const valid = new FormValidator(validationConfig, submitForm);
  valid.enableValidation();

  closeDialogClickOutside(popupDialog);

  closePopupButton.onclick = function () {
    valid.resetValidation();
    closeDialog(popupDialog);
  };
}

openEditPopupButton.onclick = function () {
  setElemntes(this.id);
  openDialog(popupDialog);
};

openAddPopupButton.onclick = function () {
  setElemntes(this.id);
  openDialog(popupDialog);
};

function loadValues() {
  inputTitle.value = profileName.textContent.trim(" ");
  inputDescription.value = profileAboutMe.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = inputTitle.value;
  profileAboutMe.textContent = inputDescription.value;

  closeDialog(popupDialog);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();

  const newCardData = {
    title: inputTitle.value,
    link: inputDescription.value,
  };

  const newCardElement = new Card(newCardData, "card-template");
  const cardElement = newCardElement.generateCard();

  cardsContainer.prepend(cardElement);

  closeDialog(popupDialog);
  submitForm.reset();
}

cardsContainer.onclick = function (e) {
  if (e.target.classList.contains("card__image")) {
    const imageSrc = e.target.src;
    const imageAlt = e.target.alt;
    openImageDialog(imageDialog, imageSrc, imageAlt);
  }
};

closeButton.onclick = function () {
  closeDialog(imageDialog);
};

closeDialogClickOutside(imageDialog);
