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
