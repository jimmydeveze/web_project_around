const initialCards = [
  {
    title: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    title: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    title: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    title: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    title: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    title: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

class Card {
  constructor(data, templateId) {
    this._title = data.title;
    this._link = data.link;
    this._templateId = templateId;
  }

  _getTemplate() {
    const cardTemplate = document
      .getElementById(this._templateId)
      .content.getElementById("card")
      .cloneNode(true);

    return cardTemplate;
  }

  _handleLikeBotton() {
    this._element
      .querySelector("#like-button")
      .classList.toggle("card__like-active");
  }

  _handledeleteButton() {
    this._element.remove();
  }

  _setEventListeners() {
    this._element
      .querySelector("#like-button")
      .addEventListener("click", () => {
        this._handleLikeBotton();
      });

    this._element
      .querySelector("#delete-button")
      .addEventListener("click", () => {
        this._handledeleteButton();
      });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector("#image").src = this._link;
    this._element.querySelector("#image").alt = this._title;
    this._element.querySelector("#card-title").textContent = this._title;

    return this._element;
  }
}

class PremadeCards extends Card {
  constructor(data, templateId) {
    super(data, templateId);
  }

  generateCards() {
    return super.generateCard();
  }
}

initialCards.forEach((item) => {
  const card = new PremadeCards(item, "card-template");
  const cardElement = card.generateCards();

  document.getElementById("cards").append(cardElement);
});

export { Card };
