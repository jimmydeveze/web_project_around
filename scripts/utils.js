function openDialog(dialogElemnt) {
  dialogElemnt.showModal();
}

function closeDialog(dialogElemnt) {
  dialogElemnt.close();
}

function closeDialogClickOutside(dialogElemnt) {
  dialogElemnt.onclick = function (e) {
    if (e.target === dialogElemnt) {
      closeDialog(dialogElemnt);
    }
  };
}

function openImageDialog(dialogElement, imageSrc, imageAlt) {
  const dialogImage = dialogElement.querySelector("#full_image");
  const dialogCaption = dialogElement.querySelector("#image_caption");

  dialogImage.src = imageSrc;
  dialogImage.alt = imageAlt;
  dialogCaption.textContent = imageAlt;

  openDialog(dialogElement);
}

export { openDialog, closeDialog, closeDialogClickOutside, openImageDialog };
